const colors = ['green', 'red', 'yellow', 'blue', 'orange', 'pink', 'brown'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

setColor();

btn.addEventListener('click', setColor);

function setColor() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
}