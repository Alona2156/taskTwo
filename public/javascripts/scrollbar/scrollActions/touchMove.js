export function touchMove(e){
  e.preventDefault();
  e.stopPropagation();
  this.current_clientY = e.changedTouches[0].clientY;
  this.deltaY = (this.current_clientY - this.start_clientY) + this.prevDeltaY;
  if (this.deltaY > 0) {
    this.moveUp();
  }
  if (this.deltaY < 0) {
    this.moveDown();
  }
}
