const { Notification } = require("electron");
module.exports = {
  showNotification: function (options) {
    if (options) {
      const alert = new Notification(options);
      alert.show();
    }
  },
};
