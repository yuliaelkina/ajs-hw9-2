import Team from '../team';

class Character {
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attack = attack;
  }
}

test('добавление персонажа в Set', () => {
  const bowman = new Character('Олег', 'лучник', 40);
  const swordsman = new Character('Иван', 'мечник', 40);
  const myTeam = new Team();
  myTeam.add(bowman);
  myTeam.add(swordsman);
  expect(myTeam.toArray()).toEqual([{ name: 'Олег', type: 'лучник', attack: 40 }, { name: 'Иван', type: 'мечник', attack: 40 }]);
});

test('добавление повторного персонажа в Set', () => {
  const swordsman = new Character('Иван', 'мечник', 40);
  const myTeam = new Team();
  myTeam.add(swordsman);
  expect(() => { myTeam.add(swordsman); }).toThrowError('Персонаж уже выбран');
});

test('добавление нескольких персонажей в Set', () => {
  const bowman = new Character('Олег', 'лучник', 40);
  const swordsman = new Character('Иван', 'мечник', 40);
  const myTeam = new Team();
  myTeam.addAll(bowman, swordsman, bowman);
  expect(myTeam.toArray()).toEqual([{ name: 'Олег', type: 'лучник', attack: 40 }, { name: 'Иван', type: 'мечник', attack: 40 }]);
});
