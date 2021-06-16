import Bowman from '../bowman';

test('new Bowman creation', () => {
  const testHero = new Bowman('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'bowman',
    attack: 25,
    defence: 25,
  };
  expect(testHero).toEqual(expectedHero);
});
