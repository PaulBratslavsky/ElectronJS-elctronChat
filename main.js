const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const helpers = require("./main.functions");
const alert = require("./notifications");

const isInDevMode = !app.isPackaged;

const SETTINGS = {
  width: 800,
  height: 600,
  backgroundColor: "white",
  webPreferences: {
    nodeIntegration: false, // prevents running node from browser
    worldSafeExecutionJavaScript: true, // google for more info
    contextIsolatioin: true, // google for more info
    preload: path.join(__dirname, 'preload.js')
  },
};

const notification = {
  title: "Welcome",
  body: "How are you today?",
};

function createWindow() {
  const electron = new BrowserWindow(SETTINGS);
  electron.loadFile("index.html");
  isInDevMode && electron.webContents.openDevTools();
}

// Hot reload
if (isInDevMode) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

function runOnStart() {
  createWindow();
  alert.showNotification(notification);
}

// event listener
ipcMain.on("notify", (_, message) =>
  alert.showNotification({
    title: "From Button Click",
    body: message,
  })
);

app.whenReady().then(runOnStart);
app.on("window-all-closed", helpers.keepOpenOnMac);
app.on("activate", helpers.openIfAllWindowsclosed);
