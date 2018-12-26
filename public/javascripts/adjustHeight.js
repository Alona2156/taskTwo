export function adjustHeight(Container, Index){
  if (Container === "chat" && Index === 0){
  var windowHeight = parseFloat(window.innerHeight);
  var inputContainer = document.getElementById("chatInput");
  var userContainer = document.getElementById("nameMain");
  var tabButtons = document.getElementById("chatButtons");
  var chatContainer = document.getElementById("chat");
  var scrollLine = chatContainer.getElementsByClassName("scrollLine")[Index];
  var scrollbar = scrollLine.getElementsByClassName("scrollBar")[0];
  var elementsHeight = [];
  function getHeight(el){
    elementsHeight.push(parseFloat(window.getComputedStyle(el, null).getPropertyValue("height")));
  }
  getHeight(inputContainer);
  getHeight(tabButtons);
  elementsHeight.push(parseFloat(userContainer.style.height));
  var totalHeight = elementsHeight.reduce(function(a, b){
    return a + b;
  })
  chatContainer.style.height = windowHeight  - (totalHeight + 100) + "px";
  scrollLine.style.height = chatContainer.style.height;
  scrollbar.style.height = parseFloat(chatContainer.style.height) - 2 + "px";
}
else if (Container === "chat" && Index !== 0) {
  var chatContainer = document.getElementById("chat");
  var scrollLine = chatContainer.getElementsByClassName("scrollLine")[Index];
  var scrollbar = scrollLine.getElementsByClassName("scrollBar")[0];
  scrollLine.style.height = chatContainer.style.height;
  scrollbar.style.height = parseFloat(chatContainer.style.height) - 2 + "px";
}
else if (Container === "userListContainer"){
  var chatContainer = document.getElementById("chat");
  var userlist = document.getElementById("userListContainer");
  var userMenu = document.getElementById("userList");
  userlist.style.height = parseFloat(chatContainer.style.height) + 4 + "px";
  var top = chatContainer.getBoundingClientRect().top;
  userlist.style.top = top + "px";
  var scrollLine = userlist.getElementsByClassName("scrollLine")[Index];
  scrollLine.style.height = parseFloat(chatContainer.style.height) + 4 + "px";
  var scrollbar = userlist.getElementsByClassName("scrollBar")[0];
  scrollbar.style.height = parseFloat(chatContainer.style.height) + "px";
}
  return {initialHeight: scrollbar.style.height};
}
