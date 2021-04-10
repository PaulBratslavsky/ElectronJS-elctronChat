const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("preload", {
  alertApi: {
    sendAlert (message) {
      ipcRenderer.send("notify", message);
    },
  }
});
