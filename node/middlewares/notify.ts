import { json } from 'co-body'

import type { OrderFormEvent } from '../typings/orderFormEvent'

export async function notify(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { events },
  } = ctx

  const orderFormEvents = (await json(ctx.req)).events as OrderFormEvent[]

  const eventsPromise = orderFormEvents
    .filter(e => e.triggered)
    .map(e => events.sendEvent('', e.eventName, e.eventObject))

  await Promise.all(eventsPromise)

  ctx.status = 200
  await next()
}
