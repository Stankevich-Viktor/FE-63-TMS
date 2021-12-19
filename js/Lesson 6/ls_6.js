// Деструктуризация

// function name(a = 5, b) {}

// let array = ['first', 'second', 'third'];
// let [first, second, third] = array;

// console.log(second);

// Объекты

// let obj = {};
// let obj = new Object();

// let person = {
//   age: 10,
//   gender: 'man',
//   hobbies: ['programming', 'cook'],
//   howOld: function name(params) {
//     console.log(person.age);
//   },
// };

// // delete gender
// console.log(person.age);
// console.log(person.gender); //получаем undefind
// console.log(person.hobbies);

// for (let key in person) {
//   console.log(key + ':' + person[key]);
// }
// person.howOld();

//  this - контекст вызова(то что происходит до точки)

// let person = {
//   age: 10,
//   gender: 'man',
//   hobbies: ['programming', 'cook'],
//   howOld: function name(params) {
//     console.log(this);
//   },
// };

// let { x, y, z } = person;

// console.log(x);

// Obj.key

// let person = {
//   age: 10,
//   gender: 'man',
//   hobbies: ['programming', 'cook'],
//   howOld: function name(params) {
//     console.log(this);
//   },
// };

// let unicObj = Object.assign([], person);

// console.log(person);
// console.log(unicObj);

// Задачи

function maxValue(array) {
  let elem;
  let count = 0;
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    tempArray = array.filter((el, index) => array.indexOf(el) > 0);
  }
}
