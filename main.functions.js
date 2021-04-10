module.exports = {
  keepOpenOnMac: function () {
    if (process.platform !== "darwin") app.quit();
  },
  openIfAllWindowsclosed: function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  },
};
