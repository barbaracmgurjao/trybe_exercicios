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

const dmg = (max, min) => { Math.floor(Math.random() * (max - min + 1) + min) };

const dragonAttack = (dragon) => { 
  const max = dragon.strength;
  const min = 15;
  dragon.damage = dmg(max, min);
};

const warriorAttack = (warrior) => { 
  const max = warrior.strength * warrior.weaponDmg;
  const min = warrior.strength;
  warrior.damage = dmg(max, min);
}

const manaMage = (min) => (mage.mana -= min);

const mageAttack = (mage) => {
  const min = mage.intelligence;
  const max = 2 * min;
  const consumedManaTurn = 15
  if (mage.mana < consumedManaTurn) {
    const notEnough = 'Não possui mana suficiente';
    return  { mana: 0, damage: notEnough }; 
  } else {
    return { mana: manaMage(consumedManaTurn), damage: dmg(max, min) };
  }
};

const battleMembers = { mage, warrior, dragon };



