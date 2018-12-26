export function createDOM() {
  this.chatInput = document.getElementById("inputField");
  this.sendButton = document.getElementById("submit");
  this.submitButton = document.getElementsByClassName("submit");
  this.chatContainer = document.getElementById("chat");
  this.chatWindow = document.getElementsByClassName("chatWindow");
  this.userList = document.getElementById("userList");
  this.userNameContainer = document.getElementById("name");
  this.userName = "";
  this.tabsArray = ["All"];
  this.tabButtons = document.getElementById("chatButtons");
  this.chatButtonContainer = this.tabButtons.getElementsByTagName("li");
  this.tabAllChats = this.tabButtons.getElementsByTagName("li")[0];
  this.scrollLine = this.chatContainer.getElementsByClassName("scrollLine");
  this.messageIndicator = document.getElementsByClassName("messageIndicator");
  this.firstInput = undefined;
  this.scrollControllerInstances = [];
}
