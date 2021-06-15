class Character {
  constructor(name, type) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.type = type;
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, "bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "magician");
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "undead");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "zombie");
    this.attack = 40;
    this.defence = 10;
  }
}