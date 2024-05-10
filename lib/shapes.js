class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  renderShape() {
    return '';
  }

  render() {
    let svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svg += this.renderShape();
    svg += `<text x="150" y="100" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    svg += `</svg>`;
    return svg;
  }
}

class Circle extends Shape {
  renderShape() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  renderShape() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  renderShape() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };