// create async function fight
function fight(fighter, improvedFighter, ...points) {

    var fight_hit = 0;

    for (let point of points) {

        if (fight_hit == 0) {
            fight_hit = 1;
            fighter.hit(improvedFighter, point);
            if (checkHealth(improvedFighter, fighter)) break;
        } else {
            fight_hit = 0;
            improvedFighter.doubleHit(fighter, point);
            if (checkHealth(fighter, improvedFighter)) break;
        }
    }
}

function checkHealth(f1, f2) {
    if (f1.health <= 0) {
      console.log(`${f1.name} is lost (${f1.health}) and ${f2.name} is win (${f2.health})`);
      return true;
    }
}