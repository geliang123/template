const schedule = require('node-schedule')
// 设置定时任务每分钟执行
export const setScheduleByMinute = callback => {
  const rule = new schedule.RecurrenceRule()
  rule.minute = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56] // 每隔5分钟执行一次
  schedule.scheduleJob(rule, () => {
    callback()
  })
}

export default {
  setScheduleByMinute
}
