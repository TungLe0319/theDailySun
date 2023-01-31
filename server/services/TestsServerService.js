/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, defineEventHandler, useBase } from 'h3'
class TestsServerService {
  addTest = defineEventHandler((event) => {
    const test = { name: 'test' }
    return test
  })
}
export const testsServerService = new TestsServerService()
