let wrapper = document.createElement("div");
wrapper.className = "wrapper";

document.body.append(wrapper);

let title = document.createElement("h1");
title.className = "title";
title.innerHTML = "JavaScript Counter";

let container = document.createElement("div");
container.className = "container";

let reset = document.createElement("button");
reset.className = "reset";
reset.innerHTML = "reset";

wrapper.append(title, container, reset);

let plus = document.createElement("button");
plus.className = "plus";
plus.innerHTML = "+";

let counterDisplay = document.createElement("div");
counterDisplay.className = "counter";
counterDisplay.innerHTML = 0;

let minus = document.createElement("button");
minus.className = "minus";
minus.innerHTML = "-";

container.append(minus, counterDisplay, plus);

let counter = 0;

plus.addEventListener("click", function () {
  counter++;
  counterDisplay.innerHTML = counter;
});

minus.addEventListener("click", function () {
  counter--;
  counterDisplay.innerHTML = counter;
});

reset.addEventListener("click", function () {
  counter = 0;
  counterDisplay.innerHTML = counter;
});
