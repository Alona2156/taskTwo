import {myView as chatButtonsView, myController as chatButtonsController} from '../chatButtons/MAIN.js';

export function window_end(ev) {
  if (ev.target === this.view.menuList || ev.target === this.view.button){
    ev.stopPropagation();
    return;
  }
  if (this.clientX !== undefined && this.view.flag !== 0) {
    this.view.menu.style.transition = "transform 0.5s ease";
    this.currentClientX = ev.changedTouches[0].clientX;
    if (this.currentClientX == this.clientX && this.view.menu.style.transform == `translateX(${this.view.menu_open}px)`) {
      this.menuTransform(this.view.menu_close);
      chatButtonsController.makeButtonBlue(0, this.view.openButton);
      this.view.menuClosed = 1;
    }
    if (this.view.flag == 1 && parseFloat(this.clientX) - parseFloat(this.currentClientX) >= 20) {
      this.menuTransform(this.view.menu_open);
      chatButtonsController.makeButtonWhite(0, this.view.openButton, "#ff0066");
      this.view.menuClosed = 0;
    } else if (this.view.flag == 2 && parseFloat(this.clientX) < parseFloat(this.currentClientX)) {
      this.menuTransform(this.view.menu_close);
      this.view.menuClosed = 1;
    }
  }
}
