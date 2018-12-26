import {createChatButton} from '../chatButtons/createChatButton.js';
import {myView as chatButtonsView,myController as chatButtonsController} from '../chatButtons/MAIN.js';

export function createUserTab(myView, newUser, status) {
  myView.tab = document.createElement('li');
  createChatButton(myView, newUser, chatButtonsController);
  chatButtonsController.createCloseIcon(myView.tab);
  chatButtonsController.createMessageIndicator(myView.tab);
  myView.tabsArray.push(newUser);
  myView.chosenUserIndex = myView.tabsArray.indexOf(newUser);
  myView.tabButtons.appendChild(myView.tab);
  myView.tab.onclick = myView.displayChat;
  chatButtonsView.status = status;
  chatButtonsController.init();
}
