const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id);
  const employeeIsManager = employee.managers.some((element) => element.length > 0);
  return employeeIsManager;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  const employee = employees.find((element) => element.id === managerId);
  if (isManager(managerId)) {
    return employee.managers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
