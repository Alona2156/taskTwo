import {userListView, userListController} from '../scrollbar/MAIN.js';

export function createScrollbar(Index){
  this.newScrollLine = document.createElement("div");
  this.newScrollLine.classList.add("scrollLine");
  this.newScrollLine.style.display = "none";
  this.newScrollBar = document.createElement("div");
  this.newScrollBar.classList.add("scrollBar");
  this.newScrollLine.appendChild(this.newScrollBar);
  this.chatContainer.appendChild(this.newScrollLine);
  var newScrollbarView = new userListView("chat", "chatWindow", Index);
  var newScrollbarController = new userListController(newScrollbarView);
  newScrollbarView.controller = newScrollbarController;
  newScrollbarController.init();
  this.scrollControllerInstances.push(newScrollbarController); 
}
