import React, { useEffect } from 'react'
import type { OrderForm } from '@vtex/clients'

import { notificationClient } from './clients/notificationClient'
import { useOrderFormMonitor } from './hooks/useOrderFormMonitor'
import { onEmailChanged } from './eventHandlers/onEmailChanged'

const OrderFormUpdateHandler: React.FC = () => {
  const client = notificationClient()
  const eventHandler = useOrderFormMonitor([onEmailChanged])

  const handleOrderFormUpdated = async (_: unknown, orderForm: OrderForm) => {
    const events = eventHandler(orderForm)

    await client.notify(events)
  }

  useEffect(() => {
    $(window).on('orderFormUpdated.vtex', handleOrderFormUpdated)

    return () => {
      $(window).off('orderFormUpdated.vtex', handleOrderFormUpdated)
    }
  }, [eventHandler])

  return <></>
}

export default OrderFormUpdateHandler
