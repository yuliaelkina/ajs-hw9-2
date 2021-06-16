import Zombie from '../zombie';

test('new Zombie creation', () => {
  const testHero = new Zombie('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'zombie',
    attack: 40,
    defence: 10,
  };
  expect(testHero).toEqual(expectedHero);
});
