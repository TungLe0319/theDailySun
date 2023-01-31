import { Router } from 'h3'

export class BaseController {
  router: Router

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor (basePath: string) {
    this.router = Router()
  }
}
