import React, { Component } from "react";
import "./App.css";
import ChatRoom from "./component/ChatRoom.js";

class App extends Component {
  render() {
    return (
      <div>
        Hello World.
        <ChatRoom />
      </div>
    );
  }
}

export default App;
