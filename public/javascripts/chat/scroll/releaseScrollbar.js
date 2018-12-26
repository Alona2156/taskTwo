import {catchScrollbar} from '../../handleCurrentScrollbar.js';

export function releaseScrollbar(myView) {
  if (catchScrollbar !== 1) {
    return;
  }
  myView.scrollController.view.releaseScrollbar();
}
