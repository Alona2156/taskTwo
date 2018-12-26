import {handleActiveChat} from '../handleActiveChat.js';
import {myView as chatButtonsView, myController as chatButtonsController} from '../chatButtons/MAIN.js';

export function openPrivateChat(myView, ev) {
  if (ev.type === "touchstart"){
    ev.preventDefault();
    myView.start_touchPoint = parseInt(ev.touches[0].clientY);
    return;
  }
  if (ev.type === "touchend"){
    ev.preventDefault();
    myView.current_touchPoint = parseInt(ev.changedTouches[0].clientY);
    if ((myView.start_touchPoint - myView.current_touchPoint) > 2 || (myView.current_touchPoint - myView.start_touchPoint) > 2 ){
      return;
    }
  }
  myView.chosenUser = this.innerHTML;
  myView.chosenUserIndex = myView.tabsArray.indexOf(myView.chosenUser);
  if (myView.chosenUser !== myView.userName && myView.chosenUserIndex < 0) {
    myView.createUserTab(myView.chosenUser, status = "active");
    myView.createChatWindow();
    handleActiveChat(myView.chosenUser, myView.chosenUserIndex);
  } else if (myView.chosenUser !== myView.userName && myView.chosenUserIndex >= 0 && myView.chatWindow[myView.chosenUserIndex].style.display === "none") {
    chatButtonsView.closeChatIcons[myView.chosenUserIndex].classList.add("hidden");
    chatButtonsView.messageIndicator[myView.chosenUserIndex].style.display = "none";
    chatButtonsView.messageIndicator[myView.chosenUserIndex].innerHTML = 0;
    chatButtonsView.removeHandlers();
    myView.reorderChatButtons();
    chatButtonsView.attachHandlers();
    handleActiveChat(myView.chosenUser, myView.chatButtonContainer.length - 1);
    chatButtonsController.chooseButton.call(myView.chatButtonContainer.length - 1);
  } else {
    return;
  }
}
