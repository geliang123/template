/* eslint-disable class-methods-use-this */
import Crawler from '../routerController/crawler'
import { Controller, Get } from '../decorator/router'

@Controller('/leader')
export default class LeaderBoardsRouter {
  @Get('/boards')
  async getLeaderboards(ctx) {
    const obj = await Crawler.getLeaderboards()
    ctx.body = obj
  }
}
