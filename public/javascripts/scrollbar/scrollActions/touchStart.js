import {userTouchView, userTouchController} from '../../userListTouch/MAIN.js';

export function touchStart(e){
  if (userTouchView.menuClosed === 0){
    userTouchController.close(e);
  }
  this.start_clientY = e.touches[0].clientY;
}
