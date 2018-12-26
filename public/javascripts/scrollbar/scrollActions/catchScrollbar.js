import {changeCurrentScrollbar} from '../../handleCurrentScrollbar.js'

export function catchScrollbar(e){
  this.catchScrollbarFlag = 1;
  this.startPoint = e.clientY;
  this.scrollBar.onmousemove = this.controller.dragScrollbar.bind(this.controller);
  this.scrollBar.onmouseup = this.releaseScrollbar.bind(this);
  changeCurrentScrollbar(this.Index, this.list, 1);
}
