import {userTouchController} from '../userListTouch/MAIN.js';
import {adjustHeight} from '../adjustHeight.js';
import {chatWindowController, myuserListController} from '../scrollbar/MAIN.js';

export function reinit(myView){
  userTouchController.reinit();
  for (var i = 0; i <= myView.scrollControllerInstances.length; i++){
    reinitScroll("chat", i);
  }
  reinitScroll("userListContainer", 0);
  function reinitScroll(el, index){
    if (el === "chat" && index === 0){
      var scrollController = chatWindowController;
      var dispatcher = myView.chatWindow[index];
    }
    else if (el === "chat" && index !== 0){
      var scrollController = myView.scrollControllerInstances[i-1];
      var dispatcher = myView.chatWindow[index];
    }
    else if (el === "userListContainer"){
      var scrollController = myuserListController;
      var dispatcher = myView.userList;
    }
  var getScrollHeight = adjustHeight(el, index);
  scrollController.view.scrollBarInitialHeight = parseFloat(getScrollHeight.initialHeight);
  scrollController.view.computeProps();
  scrollController.interval = 0;
  scrollController.view.scrollBar.style.transform = "translateY(0px)";
  scrollController.view.list.scrollTop = 0;
  dispatcher.dispatchEvent(scrollController.view.checkIfOverflow);
  }
}
