const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    maximizable: false,
    resizable:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Toujours utiliser contextIsolation pour des raisons de sécurité
      nodeIntegration: false, // Désactive nodeIntegration pour des raisons de sécurité
    },
  });

  win.loadURL('http://localhost:3000'); // Charger ton app React
  win.setMenu(null); // Supprimer la barre de menu

  // Gérer les messages IPC
  ipcMain.on('window:minimize', () => win.minimize());
  ipcMain.on('window:maximize', () => win.maximize());
  ipcMain.on('window:unmaximize', () => win.unmaximize());
  ipcMain.on('window:close', () => win.close());

  ipcMain.handle('window:isMaximized', () => win.isMaximized());
}

app.on('ready', createWindow);