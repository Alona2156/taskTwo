import {handleActiveChat} from '../handleActiveChat.js';
import {chatWindowView, chatWindowController} from '../scrollbar/MAIN.js';

export function displayChat(myView){
  var svg = this.getElementsByTagName("svg")[0];
  var text = svg.getElementsByTagName("text")[0];
  myView.chatIndex = myView.tabsArray.indexOf(text.innerHTML);
  myView.messageIndicator[myView.chatIndex].style.display = "none";
  myView.messageIndicator[myView.chatIndex].innerHTML = 0;
  handleActiveChat(text.innerHTML, myView.chatIndex);
  if (myView.chatIndex === 0){
    var scrollView = chatWindowView;
  }
  else if (myView.chatIndex !== 0){
    var scrollView = myView.scrollControllerInstances[myView.chatIndex - 1].view;
  }
  myView.chatWindow[myView.chatIndex].dispatchEvent(scrollView.checkIfOverflow);
  if (scrollView.scrollBar.style.transform === "translateY(0px)"){
    scrollView.list.scrollTop = 0;
  }
}
