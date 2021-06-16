import Character from '../character';

test('new Character creation', () => {
  expect(() => {const Oleg = new Character('Oleg')}).toThrowError('Выбранного типа героя не существует');
});
