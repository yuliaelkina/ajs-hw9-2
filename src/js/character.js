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

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Невозможно повысить уровень мертвого персонажа');
    }
    this.health = 100;
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
