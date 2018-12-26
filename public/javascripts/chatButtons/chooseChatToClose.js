export function chooseChatToClose(myView) {
  if (!myView.closeChatIcons[1]) {
    return;
  }
  else if (myView.closeChatIcons[1]) {
    var hidden = false;
    for (var i = 0; i < myView.closeChatIcons[1].classList.length; i++) {
      if (myView.closeChatIcons[1].classList[i] === "hidden") {
        hidden = true;
      }
    }
    hideShowCloseIcons(this);
  }

  function hideShowCloseIcons(myController){
    if (hidden === true) {
      myController.makeButtonWhite(0, myView.closeButton, "red");
      for (var i = 1; i < myView.closeChatIcons.length; i++) {
        myView.closeChatIcons[i].classList.remove("hidden");
        myView.msgIndicators.push(myView.messageIndicator[i].style.display);
        myView.messageIndicator[i].style.display = "none";
      }
    }
    else if (hidden === false) {
      myController.makeButtonBlue(0, myView.closeButton);
      myView.closeButtonBorder.style.border = "2px solid red";
      for (var i = 1; i < myView.closeChatIcons.length; i++) {
        myView.closeChatIcons[i].classList.add("hidden");
        if (myView.messageIndicator[i].innerHTML != 0) {
          myView.messageIndicator[i].style.display = myView.msgIndicators[i - 1];
        } else {
          myView.messageIndicator[i].style.display = "none";
        }
      }
      myView.msgIndicators = [];
    }
  }
}
