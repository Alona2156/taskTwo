export function attachHandlerToChatButton(i, myController){
  this.contextForButton = myController.chooseButton.bind(i);
  this.bindingContextButton.push(this.contextForButton);
  this.button[i].addEventListener("click", this.contextForButton);
  if (i !== 0) {
    this.contextForIcon = myController.closeChat.bind(i);
    this.bindingContextIcon.push(this.contextForIcon);
    this.closeChatIcons[i].addEventListener("click", this.contextForIcon);
  }
}
