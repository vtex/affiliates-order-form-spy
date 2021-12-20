import { IOClients } from '@vtex/api'

import { VerifyAffiliation } from './verifyAffiliation'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get verifyAffiliation() {
    return this.getOrSet('verifyAffiliation', VerifyAffiliation)
  }
}
