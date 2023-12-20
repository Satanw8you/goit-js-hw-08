function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector('#controls');
const input = mainDiv.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', createNewElement);
destroyButton.addEventListener('click', destroyElements);

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= input.min && amount <= input.max) {
    createNewElement(amount);
  }
  input.value = '';
});

function createNewElement(amount) {
  boxes.innerHTML = '';
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newElement = document.createElement('div');
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${boxSize}px`;
    newElement.style.height = `${boxSize}px`;
    boxes.appendChild(newElement);
    boxSize += 10;
  }
}

function destroyElements() {
  boxes.innerHTML = '';
}
