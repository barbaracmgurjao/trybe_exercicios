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
  const consumedManaTurn = 15
  const mageMana = mage.mana;
  const mageTurn = { manaTurn: 0, damageTurn: 'Não possui mana suficiente.'};
  if (mage.mana > consumedManaTurn) {
    mageTurn.manaTurn = 15;
    mageTurn.damageTurn = dmg(max, min);
  }
  console.log(mageTurn); //primeiro console.log
  return mageTurn;
};

const battleMembers = { mage, warrior, dragon };

const gameActions = { 

  warriorTurn: (warriorAttack) => {
    const warriorDmg = warriorAttack(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
    console.log('warrior ataca e damage fica' + warriorDmg);
  },

  mageTurn: (mageAttack) => {
    const mageCharTurn = mageAttack(mage);
    const mageManaTurn = mageCharTurn.manaTurn;
    const mageMana = mage.mana;
    const mageDmg = mageCharTurn.damageTurn;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    console.log(mageDmg); //segundo console log damage mage
    console.log(mageCharTurn.manaTurn); //terceiro mage mana da vez
    mage.mana = mageMana - mageManaTurn;
    console.log(mage.mana); //ultimo console mage mana depois da vez
    console.log('mage ataca e damage fica' + mageDmg);
  },

  dragonTurn: (dragonAttack) => {
    const dragonDmg = dragonAttack(dragon);
    dragon.damage = dragonDmg;
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    console.log('dragon ataca e damage fica' + dragonDmg);
  },

  turnEnds: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnEnds());
