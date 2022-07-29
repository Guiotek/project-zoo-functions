const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employee = employees.find((element) => {
    if (element.firstName === employeeName) {
      return element.firstName;
    }
    if (element.lastName === employeeName) {
      return element.lastName;
    }
    return undefined;
  });
  return employee;
}

console.log(getEmployeeByName('Nigel'));
console.log(getEmployeeByName('Nelson'));
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
