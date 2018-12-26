import {chatWindowController} from '../scrollbar/MAIN.js';

export function createChatWindow() {
  this.newChatWindow = document.createElement("div");
  this.newChatWindow.classList.add('chatWindow');
  this.newChatWindow.style.display = "none";
  this.chatContainer.appendChild(this.newChatWindow);
  this.createScrollbar(this.chatWindow.length - 1);
}
