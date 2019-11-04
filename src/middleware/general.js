import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import cors from '../utils/corsMiddleware'
import Logger from '../utils/logger'

global.logger = Logger(process.env.LOG_DIR)
// 添加cors
export const addCors = app => {
  app.use(cors())
}
// 添加BodyParser
export const addBodyParser = app => {
  app.use(
    bodyparser({
      enableTypes: ['json', 'form', 'text']
    })
  )
}
// 添加json
export const addJson = app => {
  app.use(json())
}
/* // 添加koa-static
export const addKoaStatic = app => {
  app.use(require('koa-static')(`${__dirname}/public`))
} */
// 添加日志
export const addLogger = app => {
  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
}
