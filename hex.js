const hex = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
];

const btn = document.querySelector('#btn');
const colorElement = document.querySelector('.color');

setColor();

btn.addEventListener('click', setColor);

function setColor() {
  const color = getHexColor();
  colorElement.textContent = color;
  document.body.style.backgroundColor = color;
}

function getHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}