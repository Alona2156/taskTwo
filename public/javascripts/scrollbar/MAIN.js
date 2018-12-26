import {
  computeProps,
  catchScrollbar,
  releaseScrollbar,
  scrollList,
  dragScrollbar,
  touchStart,
  touchMove,
  moveScrollbar,
  moveUp,
  moveDown,
  adjustScrollbarSize
} from './exportAllModules.js';

import {adjustHeight} from '../adjustHeight.js';

class userListView {
  constructor(ListContainer, List, Index = 0) {
    this.listContainer = document.getElementById(ListContainer);
    this.list = document.getElementsByClassName(List)[Index];
    this.scrollLine = this.listContainer.querySelectorAll('div.scrollLine')[Index];
    this.scrollBar = this.listContainer.querySelectorAll('div.scrollBar')[Index];
    this.Index = Index;
    this.catchScrollbarFlag = 0;
    this.scrollListStep = 20;
    this.scrollBarStepIncrementer = 0;
    this.scrollStart = 0;
    this.scrollEnd = 0;
    this.scrollStep = 0;
    var getScrollHeight = adjustHeight(ListContainer, Index);
    this.scrollBarInitialHeight = parseFloat(getScrollHeight.initialHeight);
  }
  computeProps() {
    return computeProps.call(this);
  }
  attachHandlers() {
    this.list.addEventListener("wheel", this.controller.scrollList.bind(this.controller));
    this.list.addEventListener("touchstart", this.controller.touchStart.bind(this.controller));
    this.list.addEventListener("touchmove", this.controller.touchMove.bind(this.controller));
    this.scrollBar.addEventListener("mousedown", this.catchScrollbar.bind(this));
    this.checkIfOverflow = new Event("ifOverflow");
    this.list.addEventListener("ifOverflow", this.controller.adjustScrollbarSize.bind(this.controller));
  }
  catchScrollbar(e) {
    return catchScrollbar.call(this, e);
  }
  releaseScrollbar() {
    return releaseScrollbar.call(this);
  }
}


class userListController {
  constructor(view) {
    this.view = view;
    this.interval = 0;
    this.delta = 0;
    this.prevDelta = 0;
    this.start_clientY = 0;
    this.current_clientY = 0;
    this.deltaY = 0;
    this.prevDeltaY = 0;
  }
  init() {
    this.view.computeProps();
    this.view.attachHandlers();
  }
  scrollList(e) {
    return scrollList(this, e);
  }
  moveDown() {
    return moveDown.call(this);
  }
  moveUp() {
    return moveUp.call(this);
  }
  moveScrollbar(x, y) {
    return moveScrollbar.call(this, x, y);
  }
  dragScrollbar(e) {
    return dragScrollbar.call(this, e);
  }
  touchStart(e){
    return touchStart.call(this, e);
  }
  touchMove(e){
    return touchMove.call(this, e);
  }
  adjustScrollbarSize(){
    return adjustScrollbarSize.call(this);
  }
}

var chatWindowView = new userListView("chat", "chatWindow", 0);
var chatWindowController = new userListController(chatWindowView);
chatWindowView.controller = chatWindowController;

chatWindowController.init();

var myuserListView = new userListView("userListContainer", "userList");
var myuserListController = new userListController(myuserListView);
myuserListView.controller = myuserListController;

myuserListController.init();

export {
  userListView,
  userListController
}

export {
  chatWindowView,
  chatWindowController
};

export {
  myuserListView,
  myuserListController
}
