import axios from 'axios'

import type { OrderFormEvent } from '../typings/orderFormEvent'

export const notificationClient = () => {
  return {
    notify: (events: Array<OrderFormEvent<{ orderFormId: string }>>) => {
      return axios.post('/_v/order-form-courier/notify', {
        events,
      })
    },
  }
}
