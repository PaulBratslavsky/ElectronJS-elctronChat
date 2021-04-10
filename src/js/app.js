import React from "react";

export default function App() {
  const title = "Hello";
  const enhancedTitle = title + " Electron";

  const handleSendNotification = () =>
    preload.alertApi.sendAlert("It worked");

  return (
    <div>
      <h1>{enhancedTitle}</h1>
      <p>All code goes here what nice</p>
      <button onClick={handleSendNotification}>Click Me</button>
    </div>
  );
}
