import type { OrderForm } from '@vtex/clients'

import type { OrderFormEvent } from '../typings/orderFormEvent'

export const onEmailChanged = (old: OrderForm, updated: OrderForm) => {
  const oldEmail = old?.clientProfileData?.email
  const newEmail = updated?.clientProfileData?.email

  return {
    eventName: 'order-form-email-updated',
    eventObject: { email: newEmail, orderFormId: updated.orderFormId },
    triggered: oldEmail !== newEmail,
  } as OrderFormEvent<{ email: string; orderFormId: string }>
}
