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
console.log(battleMembers);

const dragonDamage = (strength) => {
  const dano = 15;
  const damage = Math.floor(Math.random() * (strength - dano + 1)) + dano;
  return damage;
}

const warriorDamage = (strength) => {
  const weaponDmg = strength * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * ((strength * weaponDmg) - strength +1)) + strength;
  return damage;
}

const mageDamage = (intelligence) => {
  const mana = mage.mana;
  const danoTurno = {
    manaGasta: 0,
    danoDado: 'Não possui mana suficiente',
  };
  
  if (mana > 15) {
    const damage = Math.floor(Math.random() * ((intelligence * 2) - intelligence + 1)) + intelligence;
    danoTurno.manaGasta = 15;
    danoTurno.danoDado = damage;
    return danoTurno;
  };
};

console.log(mageDamage(45));

