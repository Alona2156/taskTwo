export function block_move(ev) {
  ev.preventDefault();
  this.currentX = ev.changedTouches[0].clientX;
  this.deltaX = -(this.startX - this.currentX);
  if (this.deltaX <= 300 && this.deltaX >= 0) {
    this.view.menu.style.transform = "translateX(" + this.deltaX + "px)";
  }
}
