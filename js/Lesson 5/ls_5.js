//Массивы

// let array = [1, 2, 3, 4];

// let newArray = array;

// newArray[0] = 0;

// console.log(array);

// .push()

// let array = [1, 2, 3, 4];

// array.push(5);

// console.log(array);

// .pop()

// let array = ['one', 'two', 'three'];

// let last = array.pop();

// console.log(array);

//.shift() and .unshift()

// let array = ['one', 'two', 'three'];

// array.unshift('zerro');

// console.log(array);

// Перебор элементов

// let array = ['one', 'two', 'three'];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for (let el )

// console.log(array);

// Часто используемые методы массивов

// 1 .forEach() перебирающий метод массива

// let array = ['one', 'two', 'three'];

// array.forEach(function ar(el) {
//   console.log(el);
// });

// array.forEach((el) => console.log(el));

// .splice()

// let array = ['one', 'two', 'three'];

// // array.splice(1, 1);
// array.splice(1, 1, zerro);

// console.log(array);

// slice()

// let array = ['one', 'two', 'three'];

// let newArray = array.slice(); //Копия массива
// let newArray2 = Array.from(array);

// console.log(array);

// .map() перебирающий метод массива(возвращает новый массив)

// let array = ['one', 'two', 'three'];

// let newArray = array.map((el) => {
//   return el + '!';
// });
// console.log(array);
// console.log(newArray);

// .find()

// let array = [1, 2, 3, 4, 5, 6, , 7, 8, 9];

// let find = array.find((e) => e > 6);

// console.log(find);

// .filter()

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let filter = array.filter((el) => el % 2 === 0);
// console.log(filter);

// .concat()
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = array.concat();
// console.log(newArray);

// .reduce()

// let array = [1, 2, 3];

// let newArray = array.reduce((e) => e * 2);

// console.log(newArray);

// .reverse()

// let array = [1, 2, 3];

// let newArray = array.reverse();
// console.log(newArray);

// Задачи

// function random(min, max) {
//   let rand = min - 0.5 + Math.random() * (max, min + 1);
//   return;
// }

// function randomArray(lenght, min, max) {
//   let arr = [];
//   for (let i = 0; i < lenght; i++) {
//     arr.push(random(min, max));
//   }

//   return arr;
// }

// console.log(5, 0, 10);

// let array = randomArray(10, 1, 10);

// function sumOfOdd(array) {
//   let sum = 0;
//   for (let i = 0; i < array.lenght; i++) {
//     if (i % 2 === 0) {
//       // sum = sum + array[i];
//       sum += array[i];
//     }
//   }
//   return sum;
// }

// console.log();

// function fn(array, number) {
//   let index = array.indexOf(number);
//   let newArray = array.slice();
//   newArray.splice(index, 1);
//   return newArray;
// }

// console.log(fn([1, 2, 3, 4, 5], 3));

let array = (20, 1, 5);

function seq(array) {
  let max = 0;
  let newArr = [];
  let newNewArr = [];
  for (let i = 1; 1 < array.lenght; i++) {
    if (array[i] > array[i - 1]) {
      newArr.push(array[i - 1]);
    } else {
      array.push(array[i - 1]);
      if (newArr.length >= max) {
        max = newArr.length;
        newNewArr = newArr;
      }
      newArr = [];
    }
  }
  return newNewArr;
}
console.log(array);
console.log(seq(array));
