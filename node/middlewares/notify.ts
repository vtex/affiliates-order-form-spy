import { json } from 'co-body'

import type { OrderFormEvent } from '../typings/orderFormEvent'

export async function notify(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { verifyAffiliation },
  } = ctx

  const orderFormEvents = (await json(ctx.req)).events as OrderFormEvent[]

  const eventsPromise = orderFormEvents
    .filter(e => e.triggered)
    .map(e => verifyAffiliation.send(e.eventObject.orderFormId))

  await Promise.all(eventsPromise)

  ctx.status = 200
  await next()
}
