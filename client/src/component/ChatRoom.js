import React, {Component} from "react";
import client from "socket.io-client";

class ChatRoom extends Component {
  constructor(){
    super();

    this.state = {
      endpoint: 'http://localhost:3001',
      text: "",
      chat: ""
    }
  }

  send = () => {
    const socket = client(this.state.endpoint);
    socket.emit('change color','red');
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  sendMsg = () => {
    
  }

  render(){
    const socket = client(this.state.endpoint);
    socket.on('change color', (color)=>{
      console.log(`Hey what are you trying to change to ${color} here`);
    })
    return(
      <div>
        I am a chat room.
        <button onClick={()=>this.send()}>Change Color</button>
        <div>
          <input name='text' type='text' value={this.state.text} onChange={this.onChange} />
          <button onClick={()=>this.sendMsg()}>Send</button>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
