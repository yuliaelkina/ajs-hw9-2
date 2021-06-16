import Undead from '../undead';

test('new Undead creation', () => {
  const testHero = new Undead('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'undead',
    attack: 25,
    defence: 25,
  };
  expect(testHero).toEqual(expectedHero);
});
