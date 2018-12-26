export function attachListeners() {
  this.context = [];
  for (var i = 0; i < this.listeners.length; i++) {
    for (var j = 0; j < this.listeners[i].events.length; j++) {
      if (Object.values) {
        this.listeners[i].name.addEventListener(Object.keys(this.listeners[i].events[j])[0], Object.values(this.listeners[i].events[j])[0], {passive: false});
        this.context.push({
          "name": this.listeners[i].name,
          "func": Object.values(this.listeners[i].events[j])[0]
        });
      }
      else {
        var key = Object.keys(this.listeners[i].events[j])[0];
        var value = this.listeners[i].events[j][key];
        this.listeners[i].name.addEventListener(key, value, {passive: false});
        this.context.push({
          "name": this.listeners[i].name,
          "func": value
        });
      }
    }
  }
}
