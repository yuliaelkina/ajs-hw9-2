export default class Character {
  constructor(name, type) {
    const characterTypes = ['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];
    if (name.length > 11 || name.length < 2) {
      throw new Error('Имя героя должно содержать от 2х до 10 символов');
    }
    if (!characterTypes.includes(type)) {
      throw new Error('Выбранного типа героя не существует');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.type = type;
  }
}
