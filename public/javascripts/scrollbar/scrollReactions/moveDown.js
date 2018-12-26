export function moveDown(){
  if (!isFinite(this.view.scrollBarStepIncrementer)){
    return;
  }
  if (this.interval <= (this.view.scrollEnd - Math.floor(this.view.scrollBarStepIncrementer))) {
    this.interval += this.view.scrollBarStepIncrementer;
    this.view.list.scrollTop += this.view.scrollListStep;
    this.moveScrollbar(this.interval);
    this.prevDelta = this.interval;
  } else {
    this.moveScrollbar(this.view.scrollEnd, this.view.listOverflowHeight);
  }
}
