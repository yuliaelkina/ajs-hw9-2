export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('Персонаж уже выбран');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    for (const hero of heroes) {
      this.members.add(hero);
    }
  }

  toArray() {
    const heroesArray = Array.from(this.members);
    return heroesArray;
  }
}
