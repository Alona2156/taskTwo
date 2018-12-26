import {myView as chatButtonsView, myController as chatButtonsController} from '../chatButtons/MAIN.js';

export function block_start(ev) {
  this.view.menu.style.transition = "transform 0.1s ease";
  this.startX = ev.touches[0].clientX;
}

export function block_end(ev) {
  this.view.menu.style.transition = "transform 0.5s ease";
  if (this.currentX < 1){
    return;
  }
  if (this.deltaX <= 70) {
    this.menuTransform(this.view.menu_open);
  } else {
    this.menuTransform(this.view.menu_close);
    chatButtonsController.makeButtonBlue(0, this.view.openButton);
    this.view.menuClosed = 1;
  }
}
