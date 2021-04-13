import React from "react";
import Header from "../components/Header";

export default function Settings() {
  return (
    <div id="settings">
      <Header title="Settings" withBackButton />
      <div className="container mt-5">
        <form className="">
          <div className="header">Adjust application settings</div>
          <button type="button" onClick={() => null}>
            Notify Me
          </button>
          <div className="form-container">
            <div className="my-3">
              <div className="form-check">
                <input
                  name="isDarkTheme"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">Dark Theme</label>
              </div>
              <div className="form-check">
                <input
                  name="showNotifications"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">Enable Notification</label>
              </div>
              <div className="form-check">
                <input
                  name="playSound"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">Sound notification</label>
              </div>
            </div>
            <button type="button" onClick={() => {}} className="btn btn-danger">
              Quit App
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
