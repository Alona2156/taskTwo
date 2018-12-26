export function dragScrollbar(e){
  if (this.view.catchScrollbarFlag == 1) {
    this.startPoint = this.view.startPoint;
    this.scrollStep = this.view.scrollStep;
    this.point = e.clientY;
    this.delta = (this.point - this.startPoint) + this.prevDelta;
    if (this.delta < this.view.scrollStart) {
      this.moveScrollbar(this.view.scrollStart, this.view.scrollStart);
      return;
    }
    if (this.delta > this.view.scrollEnd) {
      this.moveScrollbar(this.view.scrollEnd, this.view.listOverflowHeight);
      return;
    }
    this.moveScrollbar(this.delta, this.delta * this.view.scrollStep);
    this.interval = this.delta;
  } else {
    return;
  }
}
