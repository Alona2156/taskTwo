import {
  createDOM,
  attachHandlers,
  printMessage,
  updateUserList,
  setUserName,
  openPrivateChat,
  displayChat,
  startPrivateChat,
  createUserTab,
  createChatWindow,
  reorderChatButtons,
  createScrollbar,
  reinit,
  dragScrollbar,
  releaseScrollbar
} from './exportAllModules.js';

import {messageRecipient, changeMessageRecipient} from '../handleMessageRecipient.js';
import {myView as chatButtonsView,myController as chatButtonsController} from '../chatButtons/MAIN.js';

class chatView {
  createDOM() {
    return createDOM.call(this);
  }
  attachHandlers() {
    return attachHandlers.call(this, myController);
  }
  printMessage(message, recipient) {
    return printMessage.call(this, message, recipient);
  }
  updateUserList(users) {
    return updateUserList.call(this, users);
  }
  usersAttachHandlers() {
    this.user = this.userList.getElementsByTagName("li");
    for (var i = 0; i < this.user.length; i++) {
      this.user[i].onclick = this.openPrivateChat;
      this.user[i].ontouchstart = this.openPrivateChat;
      this.user[i].ontouchend = this.openPrivateChat;
    }
  }
  setUserName(name) {
    return setUserName.call(this, name);
  }
  openPrivateChat(ev) {
    return openPrivateChat.call(this, myView, ev);
  }
  createUserTab(newUser, status) {
    return createUserTab.call(this, myView, newUser, status);
  }
  createChatWindow() {
    return createChatWindow.call(this);
  }
  createScrollbar(Index) {
    return createScrollbar.call(this, Index);
  }
  startPrivateChat(result) {
    return startPrivateChat.call(this, result, myView);
  }
  displayChat() {
    return displayChat.call(this, myView);
  }
  reorderChatButtons() {
    return reorderChatButtons.call(this, myView);
  }
  changeSubmitButtonColor(){
    if (myView.firstInput === 0){
      chatButtonsController.makeButtonBlue(0, myView.submitButton);
      myView.firstInput = 1;
    }
  }
  dragScrollbar(e){
    return dragScrollbar.call(this, e, myView);
  }
  releaseScrollbar(){
    return releaseScrollbar.call(this, myView);
  }
}

class chatController {
  connect() {
    this.url = "ws://localhost:3000";
    this.connection = new WebSocket(this.url);
    myView.createDOM();
    myView.attachHandlers();
  }
  sendMessage() {
      chatButtonsController.makeButtonWhite(0, myView.submitButton, "#ff0066");
      myView.firstInput = 0;
      if (myView.chatInput.value.length > 0 && myView.chatInput.value !== " "){
      this.connection.send(JSON.stringify({
        room: "none",
        message: myView.chatInput.value,
        recipient: messageRecipient
      }));
      myView.chatInput.value = "";
    }
  }
  getMessage(response) {
    this.result = JSON.parse(response.data);
    if (this.result.message !== undefined && this.result.sender !== "null") {
      myView.startPrivateChat(this.result);
    } else if (this.result.message !== undefined) {
      myView.printMessage(this.result.message, this.result.recipient);
    }
    if (this.result.users !== undefined) {
      myView.updateUserList(this.result.users);
      myView.usersAttachHandlers();
    }
    if (this.result.name !== undefined) {
      myView.setUserName(this.result.name);
    }
  }
  connectionError() {
    console.log("Error happened, closing connection");
    this.closeConnection();
  }
  closeConnection() {
    this.connection.close();
  }
  reinit(){
    return reinit.call(this, myView);
  }
}

const myView = new chatView();
const myController = new chatController(myView);

myController.connect();
