import { join } from 'path'
import R from 'ramda'
import Koa from 'koa'
import Logger from './utils/logger'

const onerror = require('koa-onerror')

const app = new Koa()
global.logger = Logger(process.env.LOG_DIR)
onerror(app)
// 中间件数组
const MIDDLEWARES = ['general', 'router']
const useMiddlewares = server => {
  R.map(
    R.compose(
      R.forEachObjIndexed(e => e(server)),
      require,
      name => join(__dirname, `./middleware/${name}`)
    )
  )(MIDDLEWARES)
}

async function start() {
  await useMiddlewares(app)
}
start()

// error-handling
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx)
})
module.exports = app
