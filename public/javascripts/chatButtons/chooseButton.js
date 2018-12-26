export function chooseButton(myView, myController){
  var j = this;
  for (var i = 0; i < myView.button.length; i++) {
    if (i === j) {
      myController.makeButtonWhite(i);
    } else {
      myController.makeButtonBlue(i);
    }
  }
}

export function makeButtonWhite(i, myView, button = myView.button, textColor = "rgba(0, 199, 199, 1)"){
  var circleShape = button[i].getElementsByTagName("circle")[0];
  var text = button[i].getElementsByTagName("text")[0];
  circleShape.classList.remove("colorful");
  circleShape.classList.add("white");
  text.setAttribute("fill", textColor);
}

export function makeButtonBlue(i, myView, button = myView.button){
  var circleShape = button[i].getElementsByTagName("circle")[0];
  var text = button[i].getElementsByTagName("text")[0];
  circleShape.classList.remove("white");
  circleShape.classList.add("colorful");
  text.setAttribute("fill", "white");
}
