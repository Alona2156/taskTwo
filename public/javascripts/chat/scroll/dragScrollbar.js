import {currentIndex, currentWindow, catchScrollbar, changeCurrentScrollbar} from '../../handleCurrentScrollbar.js';
import {chatWindowController, myuserListController} from '../../scrollbar/MAIN.js';

export function dragScrollbar(e, myView){
  if (catchScrollbar !== 1){
    return;
  }
  else {
    if (currentWindow.classList[0] === "userList"){
      myView.scrollController = myuserListController;
    }
    else if (currentWindow.classList[0] === "chatWindow" && currentIndex === 0){
      myView.scrollController = chatWindowController;
    }
    else if (currentWindow.classList[0] === "chatWindow" && currentIndex !== 0){
      myView.scrollController = myView.scrollControllerInstances[currentIndex-1];
    }
    myView.scrollController.dragScrollbar(e);
  }
}
