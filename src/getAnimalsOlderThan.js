const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = species.find((element) => element.name === animal);
  const specieAges = specie.residents.filter((element) => element.age);
  const verifyAges = specieAges.every((element) => element.age !== age);
  return verifyAges;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
