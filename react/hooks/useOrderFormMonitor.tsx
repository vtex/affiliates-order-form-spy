import type { OrderForm } from '@vtex/clients'
import { useCallback, useState } from 'react'

import type { OrderFormEventHandler } from '../typings/orderFormEvent'

export const useOrderFormMonitor = (handlers: OrderFormEventHandler[]) => {
  const [orderForm, setOrderForm] = useState<OrderForm>(
    // This is used to clone the orderForm state and prevent referencing it directly.
    JSON.parse(JSON.stringify(window?.vtexjs.checkout.orderForm))
  )

  const handleOrderFormChange = useCallback(
    (eventOrderForm: OrderForm) => {
      const changes = handlers.map(handler =>
        handler(orderForm, eventOrderForm)
      )

      setOrderForm(JSON.parse(JSON.stringify(eventOrderForm)))

      return changes
    },
    [orderForm]
  )

  return handleOrderFormChange
}
