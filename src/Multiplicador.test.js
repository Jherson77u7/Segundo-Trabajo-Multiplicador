import multiplicar from './Multiplicador';

test('Multiplica 2 y 3 para obtener 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('Multiplica 0 y cualquier número para obtener 0', () => {
  expect(multiplicar(0, 5)).toBe(0);
  expect(multiplicar(0, -5)).toBe(0);
});

test('Multiplica números negativos correctamente', () => {
  expect(multiplicar(-2, 3)).toBe(-6);
  expect(multiplicar(-2, -3)).toBe(6);
});

test('Multiplica decimales correctamente', () => {
  expect(multiplicar(2.5, 4)).toBe(10);
  expect(multiplicar(0.5, 0.5)).toBe(0.25);
});
