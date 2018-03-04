// Create a function that creates the divs in the HTML rather than manually creating them.
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



//Use event.target to act on the div the user has clicked on, and call the mouse actions

// box.addEventListener

// color.addEventListener -- This is called on the palette color that is clicked. This will do different things: Set the activeColor variable (the "brush" if you will)update the form field of current color to the CSS value, and

// var selectedColor -- This is updated each time the user clicks a color from the color palette

// box.style.backgroundColor This is used to change the background color.
