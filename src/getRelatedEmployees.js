const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  let initial = false;
  const verifyManager = (managerId) => {
    if (id === managerId) {
      initial = true;
    }
  };
  managers.forEach((managerId) => verifyManager(managerId));
  return initial;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const trueAndFalse = isManager(managerId);
  if (trueAndFalse === true) {
    let array = [];
    const a = (employee) => {
      employee.managers.forEach((element) => {
        if (element === managerId) {
          array.push(`${employee.firstName} ${employee.lastName}`);
        }
      });
    };
    employees.forEach((employee) => a(employee));
    return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
