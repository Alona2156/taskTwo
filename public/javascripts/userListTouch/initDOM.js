export function initDOM(){
  this.menu = document.getElementById("userListContainer");
  this.menuList = document.getElementById('userList');
  this.button = document.getElementById("addUsers");
  this.openButton = document.getElementsByClassName("addUsers");
  this.menuListItem = this.menuList.getElementsByTagName("li");
  this.menu_close = 300;
  this.menu_open = 1;
  this.flag = 0;
  this.menuClosed = 1;
  this.listeners = [
    {"name": this.button,
      "events": [
        {"click": self.open.bind(self)},
        {"touchstart": self.open.bind(self)},
        {"touchend": self.open.bind(self)}
      ]
    },
    {"name": window,
      "events": [
        {"click": self.close.bind(self)},
        {"touchstart": self.window_start.bind(self)},
        {"touchmove": self.window_move.bind(self)},
        {"touchend": self.window_end.bind(self)}
      ]
    },
    {"name": this.menuList,
     "events": [
       {"touchstart": self.block_start.bind(self)},
       {"touchmove": self.block_move.bind(self)},
       {"touchend": self.block_end.bind(self)}
     ]
   }
  ];
}
