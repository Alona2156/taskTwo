export function computeProps(){
  this.list.style.transition = "transform 0.1s ease";
  this.listScrollHeight = parseFloat(this.list.scrollHeight);
  this.listContainerHeight = parseFloat(this.listContainer.style.height) || parseFloat(window.getComputedStyle(this.listContainer, null).getPropertyValue("height"));
  this.scrollBarStepsNumber = (this.listScrollHeight - this.listContainerHeight) / this.scrollListStep;
  this.borderTolerance = parseFloat(window.getComputedStyle(this.scrollLine, null).getPropertyValue("border-bottom-width")) + parseFloat(window.getComputedStyle(this.scrollBar, null).getPropertyValue("border-bottom-width"));
  this.scrollBarHeight = parseFloat(this.scrollBar.style.height) || this.scrollBarInitialHeight;
  this.scrollLineHeight = parseFloat(window.getComputedStyle(this.scrollLine, null).getPropertyValue("height")) - this.borderTolerance;
  this.scrollBarStepIncrementer = (this.scrollLineHeight - this.scrollBarHeight) / this.scrollBarStepsNumber;
  this.scrollEnd = this.scrollLineHeight - this.scrollBarHeight;
  this.scrollStep = (this.listScrollHeight - this.listContainerHeight) / (this.scrollLineHeight - this.scrollBarHeight);
  this.listOverflowHeight = this.listScrollHeight - this.listContainerHeight;
}
