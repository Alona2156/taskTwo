import {myuserListView, myuserListController} from '../scrollbar/MAIN.js';

export function updateUserList(users) {
  this.userList.innerHTML = "";
  this.users = users.split(",");
  for (var i = 0; i < this.users.length; i++) {
    this.user = document.createElement("li");
    this.user.innerHTML = this.users[i];
    this.userList.appendChild(this.user);
  }
  this.userList.dispatchEvent(myuserListView.checkIfOverflow);
}
