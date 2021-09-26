const btn = document.querySelector('#btn');
const colorElement = document.querySelector('.color');

setColor();

btn.addEventListener('click', setColor);

function setColor() {
  const color = getRGBColor();
  colorElement.textContent = color;
  document.body.style.backgroundColor = color;
}

function getRGBColor() {
  return `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}
  )`;
}