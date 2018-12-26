import {changeCurrentScrollbar} from '../../handleCurrentScrollbar.js'

export function releaseScrollbar(){
  this.controller.prevDelta = this.controller.delta;
  this.catchScrollbarFlag = 0;
  changeCurrentScrollbar(0, 0, 0);
}
