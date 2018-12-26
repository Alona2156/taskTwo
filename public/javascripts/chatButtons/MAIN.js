import {attachHandlers} from './attachHandlers.js';
import {chooseButton, makeButtonWhite, makeButtonBlue} from './chooseButton.js';
import {chooseChatToClose} from './chooseChatToClose.js';
import {closeChat} from './closeChat.js';
import {createDOM} from './createDOM.js';
import {removeHandlers} from './removeHandlers.js';
import {attachHandlerToChatButton} from './attachHandlerToChatButton.js';

class chatButtonsView {
  constructor() {
    this.status = "active";
    this.closeChats = 0;
    this.bindingContextButton = [];
    this.bindingContextIcon = [];
    this.msgIndicators = [];
  }
  createDOM() {
    return createDOM.call(this);
  }
  attachHandlers() {
    return attachHandlers.call(this, myController);
  }
  removeHandlers(){
    return removeHandlers.call(this);
  }
  attachHandlerToChatButton(i){
    return attachHandlerToChatButton.call(this, i, myController);
  }
}

class chatButtonsController {
  init() {
    myView.createDOM();
    myView.attachHandlers();
  }
  chooseButton() {
    return chooseButton.call(this, myView, myController);
  }
  makeButtonWhite(i, button, textColor) {
    return makeButtonWhite.call(this, i, myView, button, textColor);
  }
  makeButtonBlue(i, button, textColor) {
    return makeButtonBlue.call(this, i, myView, button, textColor);
  }
  chooseChatToClose() {
    return chooseChatToClose.call(this, myView);
  }
  createCloseIcon(currentTab) {
    currentTab.insertAdjacentHTML('beforeend', '<i class="fas fa-times crossIcon hidden"></i>');
  }
  createMessageIndicator(currentTab){
    currentTab.insertAdjacentHTML('beforeend', '<div class="messageIndicator" style="display:none">0</div>');
  }
  closeChat(ev) {
    return closeChat.call(this, ev, myController, myView);
  }
}

const myView = new chatButtonsView();
const myController = new chatButtonsController();

myController.init();

export {
  myView,
  myController
};
