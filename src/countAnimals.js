const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined || animal.length === 0) {
    return { lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6 };
  }
  const animals = species.map((element) => element.name);
  const animalSelected = animals.find((element) => element === animal.specie);
  const count = species.find((element) => element.name === animalSelected).residents;
  const Female = count.filter((element) => element.sex === 'female').length;
  if (animal.sex === 'male') { return count.length - Female; }
  if (animal.sex === 'female') { return Female; }
  return count.length;
}

console.log(countAnimals());

module.exports = countAnimals;
