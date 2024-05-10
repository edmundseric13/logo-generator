const { Circle, Triangle, Square } = require('./shapes');

test('Circle render method returns correct SVG', () => {
  const circle = new Circle('blue');
  const svg = circle.render();
  expect(svg).toContain('<svg');
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="undefined"');
});

test('Triangle render method returns correct SVG', () => {
  const triangle = new Triangle('red');
  const svg = triangle.render();
  expect(svg).toContain('<svg');
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="undefined"');
});

test('Square render method returns correct SVG', () => {
  const square = new Square('green');
  const svg = square.render();
  expect(svg).toContain('<svg');
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="undefined"');
});