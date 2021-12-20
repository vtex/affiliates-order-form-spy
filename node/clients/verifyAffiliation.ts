import type { InstanceOptions, IOContext } from '@vtex/api'
import { AppClient } from '@vtex/api'

export class VerifyAffiliation extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.affiliates@0.x', context, {
      ...options,
      headers: {
        ...options?.headers,
        ...(context.authToken
          ? { VtexIdclientAutCookie: context.authToken }
          : null),
        'Content-Type': 'application/json',
      },
    })
  }

  public send = (orderFormId: string) =>
    this.http.post(`/_v/verifyUserAffiliateLead`, { orderFormId })
}
