/* eslint-disable class-methods-use-this */
class Test {
  // 返回test
  async getMes(ctx) {
    try {
      const message = 'hey men'
      ctx.body = {
        status: '1',
        type: 'success_test',
        message: 'success',
        data: message
      }
    } catch (err) {
      ctx.body = {
        status: '0',
        type: 'error_test',
        message: err.toString()
      }
    }
  }
}
export default new Test()
