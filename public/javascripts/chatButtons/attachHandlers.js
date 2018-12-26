export function attachHandlers(myController) {
  if (this.closeChats === 0) {
    this.closeChatsButton.addEventListener("click", myController.chooseChatToClose.bind(myController));
    this.closeChats = 1;
  }
  for (var i = 0; i < this.button.length; i++) {
    if (this.reAttachHandlers !== 1 && i === this.button.length - 1) {
      this.attachHandlerToChatButton(i);
      if (this.status === "active") {
        myController.makeButtonWhite(i);
      } else {
        myController.makeButtonBlue(i);
      }
    } else if (this.reAttachHandlers !== 1 && i !== this.button.length - 1) {
      if (this.status === "active") {
        myController.makeButtonBlue(i);
      } else {
        continue;
      }
    } else if (this.reAttachHandlers === 1) {
      this.attachHandlerToChatButton(i);
    }
  }
  this.reAttachHandlers = 0;
}
