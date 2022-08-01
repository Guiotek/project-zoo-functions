const data = require('../data/zoo_data');

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  let c = 0;
  let a = 0;
  let s = 0;
  const count = (pessoa) => {
    if (pessoa.age < 18) { c += 1; }
    if (pessoa.age >= 18 && pessoa.age < 50) { a += 1; }
    if (pessoa.age >= 50) { s += 1; }
  };
  entrants.forEach((item) => count(item));
  return { child: c, adult: a, senior: s };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  let valor = 0;
  const c = pessoas.child * 20.99;
  const a = pessoas.adult * 49.99;
  const s = pessoas.senior * 24.99;
  valor = c + a + s;
  return valor;
}

console.log(calculateEntry(entrant));

module.exports = { calculateEntry, countEntrants };
