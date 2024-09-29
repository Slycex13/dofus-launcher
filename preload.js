const { contextBridge, ipcRenderer } = require('electron');

// Exposer des fonctions sécurisées à l'application React
contextBridge.exposeInMainWorld('electron', {
  window: {
    minimize: () => ipcRenderer.send('window:minimize'),
    maximize: () => ipcRenderer.send('window:maximize'),
    unmaximize: () => ipcRenderer.send('window:unmaximize'),
    close: () => ipcRenderer.send('window:close'),
    isMaximized: () => ipcRenderer.invoke('window:isMaximized'),
  },
});