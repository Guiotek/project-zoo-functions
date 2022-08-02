const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = species.find((element) => element.name === scheduleTarget);
  return animal;
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
