export function setUserName(name) {
  this.userName = name;
  this.userNameContainer.innerHTML = `You logged in as <span>${name}</span>`;
}
