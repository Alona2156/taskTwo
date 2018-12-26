import {chatWindowView, chatWindowController} from '../scrollbar/MAIN.js';

export function printMessage(message, messageRecipient) {
  this.chatWindowIndex = this.tabsArray.indexOf(messageRecipient);
  this.text = document.createElement("p");
  this.text.innerHTML = message;
  this.chatWindow[this.chatWindowIndex].appendChild(this.text);
  if (this.chatWindow[this.chatWindowIndex].style.display === "none"){
    var msgNumber = parseInt(this.messageIndicator[this.chatWindowIndex].innerHTML);
    msgNumber ++;
    this.messageIndicator[this.chatWindowIndex].innerHTML = msgNumber;
    this.messageIndicator[this.chatWindowIndex].style.display = "block";
  }
  if (this.chatWindowIndex === 0){
    var scrollView = chatWindowView;
  }
  else if (this.chatWindowIndex !== 0){
    var scrollView = this.scrollControllerInstances[this.chatWindowIndex - 1].view;
  }
  this.chatWindow[this.chatWindowIndex].dispatchEvent(scrollView.checkIfOverflow);
}
