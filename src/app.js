/* eslint-disable no-shadow */
import { join } from 'path'
import R from 'ramda'
import Logger from './utils/logger'

const Koa = require('koa')

const onerror = require('koa-onerror')

const app = new Koa()
global.logger = Logger(process.env.LOG_DIR)
onerror(app)

const MIDDLEWARES = ['general', 'router']
const useMiddlewares = app => {
  R.map(
    R.compose(
      R.forEachObjIndexed(e => e(app)),
      require,
      name => join(__dirname, `./middleware/${name}`)
    )
  )(MIDDLEWARES)
}

async function start() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  await useMiddlewares(app)
}
start()

// error-handling
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx)
})
module.exports = app
