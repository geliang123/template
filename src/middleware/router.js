import { resolve } from 'path'
import { Route } from '../decorator/router'

// eslint-disable-next-line import/prefer-default-export
export const router = app => {
  const routesPath = resolve(__dirname, '../routes')
  const instance = new Route(app, routesPath)
  instance.init()
}
