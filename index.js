const readline = require('readline');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateShape(text, textColor, shape, shapeColor) {
  let shapeInstance;
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle(text, textColor, shapeColor);
      break;
    case 'triangle':
      shapeInstance = new Triangle(text, textColor, shapeColor);
      break;
    case 'square':
      shapeInstance = new Square(text, textColor, shapeColor);
      break;
    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
  return shapeInstance.render();
}

// Prompt user for input and generate SVG
rl.question('Enter text (up to 3 characters): ', (text) => {
  rl.question('Enter text color (keyword or hex): ', (textColor) => {
    const shapes = ['circle', 'triangle', 'square'];
    rl.question(`Choose a shape (${shapes.join(', ')}): `, (shape) => {
      rl.question('Enter shape color (keyword or hex): ', (shapeColor) => {
        // Call generateShape with the user's input
        const svg = generateShape(text, textColor, shape, shapeColor);
        // Generate a unique filename for the SVG
        const filename = `./examples/logo_${Date.now()}.svg`;
        // Append svg to file
        fs.appendFile(filename, svg, (err) => {
          if (err) throw err;
          console.log(`Generated ${filename}`);
          rl.close();
        });
      });
    });
  });
});