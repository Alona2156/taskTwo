export function startPrivateChat(result, myView){
  var chatIndex = this.tabsArray.indexOf(result.sender);
  if (chatIndex < 0 && result.sender !== this.userName && this.users.indexOf(result.sender) !== -1){
    myView.createUserTab(result.sender, status = "unactive");
    myView.createChatWindow();
    myView.printMessage(result.message, result.sender);
  }
  else if (chatIndex >= 0 && this.chatButtonContainer[chatIndex].style.display !== "none") {
    myView.printMessage(result.message, result.sender);
  }
  else if (chatIndex >= 0 && this.chatButtonContainer[chatIndex].style.display === "none") {
    this.chatButtonContainer[chatIndex].style.display = "flex";
    this.chatButtonContainer[chatIndex].querySelector("i").classList.add("hidden");
    myView.printMessage(result.message, result.sender);
  }
  else if (result.sender === this.userName) {
    myView.printMessage(result.message, result.recipient);
  }
}
