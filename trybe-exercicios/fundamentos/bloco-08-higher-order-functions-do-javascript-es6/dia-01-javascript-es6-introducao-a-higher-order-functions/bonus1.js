const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const dmg = (max, min) => { return (Math.floor(Math.random() * (max - min + 1) + min)) };

const dragonAttack = (dragon) => { 
  const max = dragon.strength;
  const min = 15;
  const dragonDmg = dmg(max, min);
  return dragonDmg;
};

const warriorAttack = (warrior) => { 
  const max = warrior.strength * warrior.weaponDmg;
  const min = warrior.strength;
  const warriorDmg = dmg(max, min);
  return warriorDmg;
}

const mageAttack = (mage) => {
  const min = mage.intelligence;
  const max = 2 * min;
  const consumedManaTurn = 15;
  const mageMana = mage.mana;
  const mageTurn = { manaTurn: 0, damageTurn: 'Não possui mana suficiente.'};
  if (mageMana > consumedManaTurn) {
    mageTurn.manaTurn = consumedManaTurn;
    mageTurn.damageTurn = dmg(max, min);
  }
  return mageTurn;
};

const battleMembers = { mage, warrior, dragon };

const gameActions = { 

  warriorTurn: (warriorAttack) => {
    const warriorDmgTurn = warriorAttack(warrior);  
    dragon.healthPoints -= warriorDmgTurn;
    warrior.damage = warriorDmgTurn;
  },

  mageTurn: (mageAttack) => {
    const mageCharTurn = mageAttack(mage);
    const mageManaTurn = mageCharTurn.manaTurn;
    const mageDmgTurn = mageCharTurn.damageTurn;
    dragon.healthPoints -= mageDmgTurn;
    mage.damage = mageDmgTurn;
    mage.mana -= mageManaTurn;
  },

  dragonTurn: (dragonAttack) => {
    const dragonDmgTurn = dragonAttack(dragon);
    dragon.damage = dragonDmgTurn;
    mage.healthPoints -= dragonDmgTurn;
    warrior.healthPoints -= dragonDmgTurn;
  },

  turnEnds: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnEnds());
