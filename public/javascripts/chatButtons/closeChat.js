import {currentChatWindow, changeCurrentChatWindow} from '../handleCurrentChatWindow.js';
import {messageRecipient, changeMessageRecipient} from '../handleMessageRecipient.js';

export function closeChat(ev, myController, myView){
  ev.stopPropagation();
  var i = this;
  myView.chatButtonContainer[i].style.display = "none";
  changeCurrentChatWindow(0);
  changeMessageRecipient("All");
  var chatButtonsVisibitily = [];
  for (var j = 0; j < myView.chatWindow.length; j++) {
    if (j === 0) {
      myView.chatWindow[j].style.display = "block";
      myView.scrollbar[j].style.display = "block";
      myController.makeButtonWhite(j);
    } else {
      chatButtonsVisibitily.push(myView.chatButtonContainer[j].style.display);
      myView.chatWindow[j].style.display = "none";
      myView.scrollbar[j].style.display = "none";
      myController.makeButtonBlue(j);
    }
  }
  function isVisible(el){
    return (el === "flex");
  }
  if(!chatButtonsVisibitily.some(isVisible)){
    myController.makeButtonBlue(0, myView.closeButton);
  }
}
