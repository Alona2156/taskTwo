export function reorderChatButtons(myView){
  myView.tabButtons.appendChild(myView.chatButtonContainer[myView.chosenUserIndex]);
  myView.chatContainer.appendChild(myView.chatWindow[myView.chosenUserIndex]);
  myView.chatContainer.appendChild(myView.scrollLine[myView.chosenUserIndex]);
  myView.tabsArray.push(myView.tabsArray[myView.chosenUserIndex]);
  myView.tabsArray.splice(myView.chosenUserIndex, 1);
}
