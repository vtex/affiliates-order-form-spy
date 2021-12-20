import type { OrderForm } from '@vtex/clients'

export interface OrderFormEvent<T extends { orderFormId: string }> {
  eventName: string
  eventObject: T
  triggered: boolean
}

export type OrderFormEventHandler = (
  orderForm: OrderForm,
  newOrderForm: OrderForm
) => OrderFormEvent<{ orderFormId: string }>
