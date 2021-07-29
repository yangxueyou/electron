const NOTIFICATION_TITLE = '通知'
const NOTIFICATION_BODY = '来自渲染进程的通知'
const CLICK_MESSAGE = '请点击'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => console.log(CLICK_MESSAGE)
