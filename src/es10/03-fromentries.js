//pasar de un array de arrays a un objeto
const entries = new Map ([["name", "alexa"], ["age", 24]]);
console.log(entries);
console.log(Object.fromEntries(entries));