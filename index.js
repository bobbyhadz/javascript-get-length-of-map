// EXAMPLE 1 - Get the Length of a Map in JavaScript

const map = new Map();

map.set('name', 'bobby');
map.set('age', 30);
map.set('country', 'Chile');

console.log(map.size); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the length of a Map with Map.forEach()

// const map = new Map();

// map.set('name', 'bobby');
// map.set('age', 30);

// let length = 0;

// map.forEach((_value, _key) => {
//   length += 1;
// });

// console.log(length); // 👉️ 2
