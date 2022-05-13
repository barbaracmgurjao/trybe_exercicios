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

const calculateDamage = (character) => {
  let damage = 0;
  if (character === 'dragon') {
    damage = Math.floor((Math.random * dragon.strength) + 15);
  } else if (character === 'warrior') {
    damage = Math.floor(((Math.random * warrior.weaponDmg) + 1) * warrior.strength);
  } else {
    damage = Math.floor(((Math.random * 2) + 1) * mage.intelligence);
  }
  return damage;
};

const manaMage = () => (mage.mana >= 15 ? mage.mana -= 15 : mage.mana -= 0);

const magePerShift = () => {return{ mana: manaMage(), damage: calculateDamage(mage)}};

const battleMembers = { mage, warrior, dragon };
