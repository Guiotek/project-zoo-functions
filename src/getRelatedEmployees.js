const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id);
  const n = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
  const employeeIsManager = employees.some((element) => element.id !== n);
  console.log(employeeIsManager);
  return employeeIsManager;
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  const employee = employees.find((element) => element.id === managerId);
  return employee.managers;
}

console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
