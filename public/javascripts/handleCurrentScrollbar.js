export let currentIndex = 0;
export let currentWindow = 0;
export let catchScrollbar = 0;

export function changeCurrentScrollbar(Index, thisWindow, Catch){
  currentIndex = Index;
  currentWindow = thisWindow;
  catchScrollbar = Catch;
}
