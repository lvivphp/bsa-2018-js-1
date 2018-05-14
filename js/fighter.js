// Create class Fighter

class Fighter {
  constructor(name, power, health) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage) {
    this.health = this.health - damage;
    console.log(`${this.name} health: ${this.health}`);
  }

  hit(enemy, point) {
      let damage = point * this.power;
      enemy.setDamage(damage);
  }
}
