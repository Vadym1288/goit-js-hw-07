function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBoxes = () => {
  destroyBoxes();

  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }

    boxesContainer.append(...boxes);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]').addEventListener('click', createBoxes);
const buttonDestroy = document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
const boxesContainer = document.querySelector('#boxes');