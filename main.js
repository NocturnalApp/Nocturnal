const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,      
      height: 600,
      title: "Nocturnal",
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index/index.html');

    // Open DevTools by default
    win.webContents.openDevTools();
  }
  

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
