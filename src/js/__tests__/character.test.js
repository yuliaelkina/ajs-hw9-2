import Character from '../character';
import Daemon from '../daemon';

test('new Character creation', () => {
  expect(() => { const Oleg = new Character('Oleg'); }).toThrowError('Выбранного типа героя не существует');
});

test('new Character with wrong name', () => {
  expect(() => { const Oleg = new Character('O'); }).toThrowError('Имя героя должно содержать от 2х до 10 символов');
});

test('upgrading of hero', () => {
  const hero = new Daemon('Oleg');
  hero.levelUp();
  const expectedHero = {
    name: 'Oleg',
    health: 100,
    level: 2,
    type: 'daemon',
    attack: 12,
    defence: 48,
  };
  expect(hero).toEqual(expectedHero);
});

test('damage', () => {
  const hero = new Daemon('Oleg');
  hero.damage(100);
  const expectedHero = {
    name: 'Oleg',
    health: 40,
    level: 1,
    type: 'daemon',
    attack: 10,
    defence: 40,
  };
  expect(hero).toEqual(expectedHero);
});
