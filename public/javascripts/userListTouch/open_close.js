import {myView as chatButtonsView, myController as chatButtonsController} from '../chatButtons/MAIN.js';

export function open(ev) {
  ev.preventDefault();
  if (ev.type === "touchend"){
    ev.stopPropagation();
    return;
  }
  if (this.view.menuClosed === 1){
    console.log(ev.type);
    chatButtonsController.makeButtonWhite(0, this.view.openButton, "#ff0066");
    ev.stopPropagation();
    this.view.menu.style.transition = "transform 0.5s ease";
    this.menuTransform(this.view.menu_open);
    this.view.menuClosed = 0;
  }
  else if (this.view.menuClosed === 0){
    console.log(ev.type);
    ev.stopPropagation();
    this.close(ev);
  }
}

export function close(ev) {
  var excludedTags = [this.view.menu, this.view.menuList];
  for (var i = 0; i < this.view.menuListItem.length; i++){
    excludedTags.push(this.view.menuListItem[i]);
  }
  if (this.view.menu.style.transform == `translateX(${this.view.menu_open}px)` && excludedTags.indexOf(ev.target) == -1 ) {
    chatButtonsController.makeButtonBlue(0, this.view.openButton);
    this.view.menu.style.transition = "transform 0.5s ease";
    this.menuTransform(this.view.menu_close);
    this.view.menuClosed = 1;
  }
}
