// Create a function that creates the divs in the HTML rather than manually creating them.
const canvas = document.querySelector('.canvas');
const boxTotal = (canvas.clientHeight * canvas.clientWidth) / 100;

function createBox() {
  var newBox = document.createElement('div');
  newBox.className = 'box';
  newBox.innerHTML = '';
  canvas.appendChild(newBox);
}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < boxTotal; i++) {
    createBox();
  }
});


//Use event.target to act on the div the user has clicked on, and call the mouse actions

// box.addEventListener

// color.addEventListener -- This is called on the palette color that is clicked. This will do different things: Set the activeColor variable (the "brush" if you will)update the form field of current color to the CSS value, and

// var selectedColor -- This is updated each time the user clicks a color from the color palette

// box.style.backgroundColor This is used to change the background color.
