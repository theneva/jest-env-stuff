/** @jest-environment jest-environment-jsdom-thirteen */

test('hi', () => {
  const key = 'k';
  const value = 'v';

  localStorage.setItem(key, value);
  expect(localStorage.getItem(key)).toEqual(value);
});
