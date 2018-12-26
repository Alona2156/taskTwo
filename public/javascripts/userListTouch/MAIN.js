import {open, close} from './open_close.js';
import {initDOM} from './initDOM.js';
import {block_start, block_end} from './block_start_end.js';
import {block_move} from './block_move.js';
import {window_start} from './window_start.js';
import {window_end} from './window_end.js';
import {attachListeners} from './attachListeners.js';
import {removeListeners} from './removeListeners.js';

import {myView as chatButtonsView, myController as chatButtonsController} from '../chatButtons/MAIN.js';

class View{
  initDOM(){
    return initDOM.call(this);
  }
  attachListeners() {
    return attachListeners.call(this);
  }
  removeListeners(){
    return removeListeners.call(this);
  }
}

class Controller {
  constructor(myView){
    this.view = myView;
    self = this;
    this.startX = 0;
    this.currentX = 0;
    this.clientX = 0;
    this.currentClientX = 0;
  }
  init() {
    if (parseFloat(document.body.clientWidth) <= 999) {
      myView.initDOM();
      myView.attachListeners();
    }
    else {
      return;
    }
  }
  reinit(){
    if (parseFloat(document.body.clientWidth) <= 999) {
      myView.initDOM();
      this.menuTransform(this.view.menu_close);
      if(this.view.button.getElementsByTagName("circle")[0].classList[0] === "white"){
        chatButtonsController.makeButtonBlue(0, this.view.openButton);
      }
      myView.removeListeners();
      myView.attachListeners();
    }
    else {
      myView.initDOM();
      this.menuTransform(this.view.menu_open);
      myView.removeListeners();
    }
  }
  open (ev){
    return open.call(this, ev);
  }
  close(ev){
    return close.call(this, ev);
  }
  block_start(ev){
    return block_start.call(this, ev);
  }
  block_move(ev){
    return block_move.call(this, ev);
  }
  block_end(ev){
    return block_end.call(this, ev);
  }
  window_start(ev){
    return window_start.call(this, ev);
  }
  window_end(ev){
    return window_end.call(this, ev);
  }
  menuTransform(translate){
    this.view.menu.style.transform = `translateX(${translate}px)`;
  }
  window_move(ev){
    ev.preventDefault();
  }
}

const myView = new View();
const myController = new Controller(myView);
myController.init();

export {
  myView as userTouchView,
  myController as userTouchController
}
