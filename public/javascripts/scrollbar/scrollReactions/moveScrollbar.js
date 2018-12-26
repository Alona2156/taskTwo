export function moveScrollbar(x, y) {
  this.view.scrollBar.style.transform = `translateY(${x}px)`;
  if (y !== undefined) {
    this.view.list.scrollTop = y;
  }
}
