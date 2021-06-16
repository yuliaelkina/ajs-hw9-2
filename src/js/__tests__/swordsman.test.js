import Swordsman from '../swordsman';

test('new Swordsman creation', () => {
  const testHero = new Swordsman('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'swordsman',
    attack: 40,
    defence: 10,
  };
  expect(testHero).toEqual(expectedHero);
});
