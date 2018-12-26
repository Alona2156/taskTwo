export function createChatButton(myView, newUser, myController) {
  myView.svgWidth = parseFloat(getTextWidth(newUser)) + 20;
  myView.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  myView.svg.innerHTML = "<circle></circle><text></text>";
  myView.svg.classList.add("button");
  myView.tab.appendChild(myView.svg);

  function create_element(el, attrs) {
  if (Object.values) {
    for (var i = 0; i < Object.keys(attrs).length; i++) {
      el.setAttribute(Object.keys(attrs)[i], Object.values(attrs)[i]);
    }
  } else {
    var values = [];
    Object.keys(attrs).map(function(key) {
      values.push(attrs[key]);
    })
    for (var i = 0; i < Object.keys(attrs).length; i++) {
      el.setAttribute(Object.keys(attrs)[i], values[i]);
    }
  }
}

  myView.circleAttrs = {
    "cx": "50%",
    "cy": "50%",
    "r": "1%",
    "fill": "transparent"
  }
  myView.circle = myView.svg.getElementsByTagName("circle")[0];
  create_element(myView.circle, myView.circleAttrs);

  myView.textAttrs = {
    "text-anchor": "middle",
    "alignment-baseline": "middle",
    "dominant-baseline": "middle",
    "x": "50%",
    "y": "50%",
    "fill": "white"
  }
  myView.text = myView.svg.getElementsByTagName("text")[0];
  create_element(myView.text, myView.textAttrs);

  myView.text.innerHTML = newUser;
  myView.svg.style.width = myView.svgWidth + "px";
  myView.svg.style.height = "32px";
  var div = document.getElementsByClassName("emptyDiv")[0];
  document.body.removeChild(div);
}

function getTextWidth(newUser){
  var div = document.createElement("div");
  div.classList.add("emptyDiv");
  div.style.cssText = "position:absolute;padding:5px; display:inline-block; visibility:hidden; letter-spacing:1.2px";
  div.innerHTML = newUser;
  document.body.appendChild(div);
  var size = window.getComputedStyle(div, null).getPropertyValue("width");
  return size;
}
