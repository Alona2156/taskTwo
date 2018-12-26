import {messageRecipient, changeMessageRecipient} from './handleMessageRecipient.js';
import {currentChatWindow, changeCurrentChatWindow} from './handleCurrentChatWindow.js';

export function handleActiveChat(chosenUser, chosenUserIndex) {
  var chatWindows = document.getElementsByClassName("chatWindow");
  var chatButtonsList = document.getElementById("chatButtons");
  var chatButtonContainers = chatButtonsList.getElementsByTagName("li");
  var scrollbars = document.getElementsByClassName("scrollLine");
  changeMessageRecipient(chosenUser);
  for (var i = 0; i < chatWindows.length; i++) {
    if (i === chosenUserIndex) {
      chatWindows[i].style.display = "block";
      chatButtonContainers[i].style.display = "flex";
      scrollbars[i].style.display = "block";
      changeCurrentChatWindow(i);
    }
    else {
      chatWindows[i].style.display = "none";
      scrollbars[i].style.display = "none";
    }
  }
}
