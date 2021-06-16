import Daemon from '../daemon';

test('new Daemon creation', () => {
  const testHero = new Daemon('Oleg');
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'daemon',
    attack: 10,
    defence: 40,
  };
  expect(testHero).toEqual(expectedHero);
});
