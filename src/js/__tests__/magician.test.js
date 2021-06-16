import Magician from '../magician';

test('new Magician creation', () => {
  const testHero = new Magician('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'magician',
    attack: 10,
    defence: 40,
  };
  expect(testHero).toEqual(expectedHero);
});
