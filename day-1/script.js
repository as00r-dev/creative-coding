const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// give a stroke width to the shapes drawn
context.lineWidth = 8;

// Begin a shape
context.beginPath();
// Add the shape
context.rect(100, 100, 400, 400);
// we want to render shape with only borders and no fill
context.stroke();

// same thing as above but a circle
context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();
