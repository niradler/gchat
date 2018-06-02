import React, { Component } from "react";
import TextChat from './TextChat'
class ChatContainer extends Component {

  render() {
    return (
      <div className="container">
      <h1 className="text-center">Chat</h1>

      <TextChat></TextChat>

      </div>
    );
  }
}

export default ChatContainer;
