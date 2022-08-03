const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function days(scheduleTarget) {
  const a = {};
  const keys = Object.keys(hours);
  keys.forEach((day) => {
    const b = species.filter((element) => element.availability.find((e) => e === day));
    const c = b.map((e) => e.name);
    a[`${day}`] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: c,
    };
  });
  a.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return a;
}

function verify(scheduleTarget) {
  const a = {};
  const d = species.filter((element) => element.availability.find((e) => e === scheduleTarget));
  const e = d.map((element) => element.name);
  const f = hours[scheduleTarget];
  a[`${scheduleTarget}`] = { officeHour: `Open from ${f.open}am until ${f.close}pm`,
    exhibition: e,
  };
  return a;
}

function getSchedule(scheduleTarget) {
  const animals = species.some((element) => element.name === scheduleTarget);
  const key = Object.keys(hours);
  const verifyKeys = key.some((element) => element === scheduleTarget);
  if (animals === true) {
    const animal = species.find((element) => element.name === scheduleTarget);
    return animal.availability;
  }
  if (verifyKeys === true && scheduleTarget === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
  if (verifyKeys === true) {
    return verify(scheduleTarget);
  }
  return days(scheduleTarget);
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
