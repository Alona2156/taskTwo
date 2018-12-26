export function window_start(ev) {
  if (ev.target === this.view.menuList || ev.target === this.view.button){
    ev.stopPropagation();
    return;
  }
  var excludedTags = [this.view.menu, this.view.menuList];
  for (var i = 0; i < this.view.menuListItem.length; i++){
    excludedTags.push(this.view.menuListItem[i]);
  }
  if (excludedTags.indexOf(ev.target) == -1) {
    this.clientX = ev.touches[0].clientX;
    if (parseFloat(this.clientX) >= (document.body.clientWidth - 60)) {
      this.view.flag = 1;
    } else if (parseFloat(this.clientX) < (document.body.clientWidth - 60) && this.view.menu.style.transform == `translateX(${this.view.menu_open}px)`) {
      this.view.flag = 2;
    } else {
      this.view.flag = 0;
    }
  } else {
    this.clientX = undefined;
  }
}
