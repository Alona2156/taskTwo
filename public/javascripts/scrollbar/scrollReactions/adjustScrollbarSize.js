export function adjustScrollbarSize(){
  this.listOverflowPercent = ((parseFloat(this.view.list.scrollHeight) * 100)/this.view.listContainerHeight)/100;
  this.view.scrollBar.style.height = (this.view.scrollBarInitialHeight / this.listOverflowPercent) + "px";
  this.view.computeProps();
}
