// Create class ImprovedFighter
class ImprovedFighter extends Fighter {
  doubleHit(enemy, point) {
    this.hit(enemy, point * 2);
  }
}
