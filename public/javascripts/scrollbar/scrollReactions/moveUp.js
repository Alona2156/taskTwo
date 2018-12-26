export function moveUp(){
  if (!isFinite(this.view.scrollBarStepIncrementer)){
    return;
  }
  if (this.interval >= Math.floor(this.view.scrollBarStepIncrementer)) {
    this.interval -= this.view.scrollBarStepIncrementer;
    this.view.list.scrollTop -= this.view.scrollListStep;
    this.moveScrollbar(this.interval);
    this.prevDelta = this.interval;
  } else {
    this.moveScrollbar(this.view.scrollStart, this.view.scrollStart);
  }
}
