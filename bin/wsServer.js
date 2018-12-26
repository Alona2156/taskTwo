const wsServer = require("./www.js").wsServer;
const WebSocket = require("./www.js").WebSocket;
var UserModule = require("../routes/index.js");
var users = [];

module.exports = function handleSockets() {
  self = this;
  self.repetedEntry = 0;
  this.onConnect = function(ws) {
    ws.name = UserModule.userName;
    if (users.indexOf(ws.name) === -1){
      users.push(ws.name);
    }
    else {
      self.repetedEntry ++;
    }
    self.send(ws);
    ws.on('message', self.onMessage.bind(ws));
    ws.on("close", self.onClose.bind(ws));
  }
  self.send = function(ws) {
    wsServer.clients.forEach(function each(client) {
      self.sendMessage(client, ws);
      self.sendUsers(client);
      self.sendUserName(client, ws);
    })
  }
  self.sendMessage = function(client, ws, message = `${ws.name} joined the chat`, sender = "null", recipient = "All") {
  if (client.readyState === WebSocket.OPEN) {
    if (self.repetedEntry === 0 && message === `${ws.name} joined the chat` || message !== `${ws.name} joined the chat`) {
      client.send(JSON.stringify({
        sender: `${sender}`,
        message: `${message}`,
        recipient: `${recipient}`
      }));
    } else if (self.repetedEntry > 0 && message === `${ws.name} joined the chat`) {
      if (client === ws) {
        client.send(JSON.stringify({
          sender: `${sender}`,
          message: `${message}`,
          recipient: `${recipient}`
        }));
      }
    }
  }
}
  self.sendUsers = function(client) {
    client.send(JSON.stringify({
      users: `${users}`
    }))
  }
  self.sendUserName = function(client, ws) {
    if (client === ws) {
      client.send(JSON.stringify({
        name: ws.name
      }));
    }
  }
  self.onMessage = function(data) {
    var ws = this;
    var msg = JSON.parse(data);
    var msgText = msg.message.replace(/</g, "&lt;");
    var message = `${this.name}: ${msgText}`;
    if (msg.recipient === "All") {
      wsServer.clients.forEach(function each(client) {
        self.sendMessage(client, ws, message);
      })
    } else {
      wsServer.clients.forEach(function each(client) {
        if (client.name === msg.recipient || client.name === ws.name) {
          self.sendMessage(client, ws, message, sender = `${ws.name}`, recipient = `${msg.recipient}`);
        }
      })
    }
  }
  self.onClose = function(){
    if (self.repetedEntry === 0){
      var ws = this;
      var message = `${ws.name} left the chat`;
      var Index = users.indexOf(ws.name);
      users.splice(Index, 1);
      wsServer.clients.forEach(function each(client) {
        self.sendUsers(client);
        self.sendMessage(client, ws, message);
        self.sendMessage(client, ws, message, sender = `${ws.name}`, recipient = `${client.name}`);
      })
    }
    else {
      self.repetedEntry --;
    }
  }
}
