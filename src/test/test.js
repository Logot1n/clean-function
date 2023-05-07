import getHealthStatus from '../js/getHealthStatus';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'dead'],
])('checking health status in %s', (character, expected) => {
  expect(getHealthStatus(character)).toBe(expected);
});
