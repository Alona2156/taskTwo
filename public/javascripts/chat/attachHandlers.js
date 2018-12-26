export function attachHandlers(myController){
  this.sendButton.onclick = myController.sendMessage.bind(myController);
  this.tabAllChats.onclick = this.displayChat;
  this.chatInput.oninput = this.changeSubmitButtonColor.bind(myController);
  myController.connection.onerror = myController.connectionError.bind(myController);
  myController.connection.onmessage = myController.getMessage.bind(myController);
  myController.connection.onclose = myController.closeConnection.bind(myController);
  window.addEventListener("beforeunload", myController.closeConnection.bind(myController));
  window.addEventListener("resize", myController.reinit.bind(myController));
  window.addEventListener("mousemove", this.dragScrollbar);
  window.addEventListener("mouseup", this.releaseScrollbar);
}
