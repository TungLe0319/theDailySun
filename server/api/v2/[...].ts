/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, defineEventHandler, useBase } from 'h3'
// import { testsServerService } from '~~/server/services/TestsServerService'

class TestsRouter {
  router: any
  handler: any
  constructor () {
    this.router = createRouter()
    this.handler = () => useBase('/api/v2', this.router.handler)
    this.router.get('/test', this.getTest)

    this.router.post('/test', this.addTest)
  }

  protected addTest = defineEventHandler(event => 'testing')
  getTest = defineEventHandler(event => 'helloWorld')
}

export default new TestsRouter().handler()
