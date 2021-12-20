import type { OrderForm } from '@vtex/clients'

declare global {
  interface Window extends Window {
    vtexjs: {
      checkout: {
        orderForm: OrderForm
      }
    }
  }
}
