function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

function changeColor () {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
};

button.addEventListener("click", changeColor);