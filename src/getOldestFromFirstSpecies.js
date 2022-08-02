const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employ = employees.find((element) => element.id === id);
  const firstAnimal = employ.responsibleFor[0];
  const animal = species.find((element) => element.id === firstAnimal);
  const verifyAge = animal.residents.sort((a, b) => b.age - a.age);
  return [verifyAge[0].name, verifyAge[0].sex, verifyAge[0].age];
}

console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
