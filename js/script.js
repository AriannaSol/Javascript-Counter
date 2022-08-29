function createElement(tag, idName, text) {
  let element = document.createElement(tag);
  element.id = idName;
  element.innerHTML = text;
  return element;
}

let container = createElement("div", "container", "");
let wrapper = createElement("div", "wrapper", "");
let title = createElement("h1", "title", "JavaScript Counter");
let counterDisplay = createElement("div", "counter", "0");
let minusButton = createElement("button", "minus", "-");
let plusButton = createElement("button", "plus", "+");
let resetButton = createElement("button", "reset", "Reset");

document.body.append(wrapper);
wrapper.append(title, container, resetButton);
container.append(minusButton, counterDisplay, plusButton);

let counter = 0;

document.getElementById("wrapper").addEventListener("click", function (e) {
  if (e.target == minusButton) {
    counter--;
  }
  if (e.target == plusButton) {
    counter++;
  }
  if (e.target == resetButton) {
    counter = 0;
  }
  counterDisplay.innerHTML = counter;
});
