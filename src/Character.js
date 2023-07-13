export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error("Недопустимое количество букв в имени!");
    }

    const options = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (options.some((el) => el === type)) {
      this.type = type;
    } else {
      throw new Error("Неверно выбран тип героя");
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя добавить жизнь умершему!");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error("Уже есть ранение");
    }
  }

  set stoned(stoned) {
    this.isStoned = stoned;
  }

  get stoned() {
    return this.isStoned;
  }

  set attackLevel(square) {
    this.attack -= (square * 0.1 - 0.1) * this.attack;

    if (this.stoned === true) {
      this.attack -= Math.round(Math.log2(square)) * 5;
    }

    if (this.attack < 0) {
      this.attack = 0;
    }
  }

  get attackLevel() {
    return this.attack;
  }
}
