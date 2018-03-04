let canvas = document.querySelector('.canvas');
let palette = document.querySelector('.palette');
let brushColor;
const boxTotal = (canvas.clientHeight * canvas.clientWidth) / 100;

function createBox() {
  let newBox = document.createElement('div');
  newBox.className = 'box';
  canvas.appendChild(newBox);
}

function pickColor() {
  let activeColorBox = document.querySelector('.activeColor');
  let paletteColor = event.target;
  let color = window.getComputedStyle(paletteColor,null).getPropertyValue("background-color");
  brushColor = color;
  activeColorBox.style.backgroundColor = color;
}

function paintBox () {
  let box = event.target;
  box.style.backgroundColor = brushColor;

}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < boxTotal; i++) {
    createBox();
  }
  palette.addEventListener('click', pickColor);
  canvas.addEventListener('click', paintBox);
});
