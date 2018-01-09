/**
 * JS
 */

const harry = Symbol('Harry');
const person = Symbol('Harry');

const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
};

const symsClassRoom = Object.getOwnPropertySymbols(classRoom);
const dataClassRoom = symsClassRoom.map((sym) => classRoom[sym]);

console.log(dataClassRoom);