// create async function fight

fight = (fighter, improvedFighter, ...points) => {

    // random first fighter
    var fight_hit = Math.round(Math.random());

    // queue of fights
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

// random fighter health
checkHealth = (f1, f2) => {
    if (f1.health <= 0) {
      console.log(`${f1.name} is lost (${f1.health}) and ${f2.name} is win (${f2.health})`);
      return true;
    }
}