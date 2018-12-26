export function removeListeners() {
  if (this.context) {
      for (var i = 0; i < this.listeners.length; i++) {
        this.boundContext = [];
        this.context.forEach(function(x) {
          if (x.name === self.view.listeners[i].name) {
            self.view.boundContext.push(x);
          }
        })
        for (var j = 0; j < this.listeners[i].events.length; j++) {
          this.listeners[i].name.removeEventListener(Object.keys(this.listeners[i].events[j])[0], this.boundContext[j].func, {passive:false});
        }
      }
  } else {
    return;
  }
}
