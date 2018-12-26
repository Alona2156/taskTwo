export function scrollList(controller, e) {
    if (e.deltaY > 0) {
      controller.moveDown();
    }
    if (e.deltaY < 0) {
      controller.moveUp();
    }
}
