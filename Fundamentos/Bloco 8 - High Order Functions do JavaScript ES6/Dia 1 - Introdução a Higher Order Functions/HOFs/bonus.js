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

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const maxDmg = dragon.strength;
  const minDmg = 15;
  const damage = Math.floor(Math.random() * (maxDmg - minDmg + 1)+ minDmg) ;
  return damage;
};

const warriorDamage = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg) ;
  return damage;
};

const mageDamage = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mana = mage.mana;
  const mageAttack = {
    manaSpent: 0,
    damageDealt: 'Não possui mana...',
  };

  if (mana > 15) {
    const damage = Math.floor((Math.random() * (maxDmg - minDmg + 1 )) + minDmg);
    mageAttack.manaSpent = 15,
    mageAttack.damageDealt = damage;
    return mageAttack;
  }
  return mageAttack;
}

const gameActions = {
  warriorTurn: (callback) => {
    const warriorAttack = callback(warrior);
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageTurn: (callback) => {
    const mageAttack = callback(mage);
    mage.mana -= mageAttack.manaSpent;
    mage.damage = mageAttack.damageDealt;
    dragon.healthPoints -= mageAttack.damageDealt;
  },
  dragonTurn: (callback) => {
    const dragonAttack = callback(dragon);
    dragon.damage = dragonAttack;
    warrior.healthPoints -= dragonAttack;
    mage.healthPoints -= dragonAttack;
  },
  result: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log('Warrior:',warrior);
console.log('Mage:', mage);
console.log('Dragon:',dragon);
console.log(gameActions.result());


















// MÉTODO ANTERIOR

// const dragonDamage = (dragon) => {
//   const dano = 15;
//   const strength = dragon.strength;
//   const damage = Math.floor(Math.random() * (strength - dano + 1)) + dano;
//   return damage;
// }

// const warriorDamage = (warrior) => {
//   const strength = warrior.strength;
//   const weaponDmg = strength * warrior.weaponDmg;
//   const damage = Math.floor(Math.random() * ((strength * weaponDmg) - strength +1)) + strength;
//   return damage;
// }
// console.log(warriorDamage())

// const mageDamage = (mage) => {
//   const intelligence = mage.intelligence;
//   const mana = mage.mana;
//   const danoTurno = {
//     manaGasta: 0,
//     danoDado: 'Não possui mana suficiente',
//   };
  
//   if (mana > 15) {
//     const damage = Math.floor(Math.random() * ((intelligence * 2) - intelligence + 1)) + intelligence;
//     danoTurno.manaGasta = 15;
//     danoTurno.danoDado = damage;
//     return danoTurno;
//   };
// };

// const gameActions = {
//   warriorTurn: (warriorDamage) => {
//     const warriorAttack = warriorDamage(warrior);
//     console.log(warriorAttack);
//     warrior.damage = warriorAttack;
//     dragon.healthPoints -= warriorAttack;
//   },
// };

