export function removeHandlers() {
  for (var i = 0; i < this.button.length; i++) {
    this.button[i].removeEventListener("click", this.bindingContextButton[i]);
    if (i > 0) {
      this.closeChatIcons[i].removeEventListener("click", this.bindingContextIcon[i-1]);
    }
  }
  this.bindingContextButton = [];
  this.bindingContextIcon = [];
  this.reAttachHandlers = 1;
}
