import React from "react";

function AboutApp() {
  return (
    <div>
      <h1 className="text-center">About the App</h1>
      <p>
        In this app, you can add, delete, submit and edit items. To edit items,
        simply double click on it. Once you are done, press the enter key to
        resubmit. This app will persist your data in the browser local storage.
        So whather you reload, close your app or reopen it, you still have
        access to your to-dos items.
      </p>
    </div>
  );
}

export default AboutApp;
