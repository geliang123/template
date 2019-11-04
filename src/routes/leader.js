/* eslint-disable class-methods-use-this */
import Crawler from '../routerController/crawler'
import { Controller, Get } from '../decorator/router'
import { setScheduleByMinute } from '../utils'

@Controller('/leader')
export default class LeaderBoardsRouter {
  @Get('/boards')
  async getLeaderboards(ctx) {
    const obj = await Crawler.getLeaderboards()
    ctx.body = obj
  }
}
// 设置定时任务
const callback = () => {
  Crawler.getLeaderboards()
}
setScheduleByMinute(callback)
