
// app 模块，它控制应用程序的事件生命周期
// BrowserWindow 模块，它创建和管理应用程序 窗口
const { app, BrowserWindow } = require('electron')
const path = require('path')


// 将index.html加载进一个新的BrowserWindow实例
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

// 部分 API 在 ready 事件触发后才能使用。
// 只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。 您可以通过使用 app.whenReady() API来监听此事件
app.whenReady().then(() => {
  createWindow()
  // 当 Linux 和 Windows 应用在没有窗口打开时退出了，
  // macOS 应用通常即使在没有打开任何窗口的情况下也继续运行，并且在没有窗口可用的情况下激活应用时会打开新的窗口。
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 当所有窗口关闭时退出，macOS 除外
// 退出 Cmd + Q
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})