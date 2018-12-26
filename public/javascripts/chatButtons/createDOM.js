export function createDOM(){
  this.chatButtonsList = document.getElementById("chatButtons");
  this.chatButtonContainer = this.chatButtonsList.getElementsByTagName("li");
  this.button = document.getElementsByClassName("button");
  this.closeChatsButton = document.getElementById("closeButton");
  this.closeButton = document.getElementsByClassName("closeButton");
  this.closeButtonBorder = document.getElementById("doubleBorder");
  this.closeChatIcons = document.getElementsByClassName("crossIcon");
  this.chatWindow = document.getElementsByClassName("chatWindow");
  this.scrollbar = document.getElementsByClassName("scrollLine");
  this.messageIndicator = document.getElementsByClassName("messageIndicator");
}
