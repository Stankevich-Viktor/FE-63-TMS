// let chek = 11;
// const tips = (15 / 100) * chek;
// let checkTips = (chek + tips).toFixed(2);
// let rez;

// if (checkTips > 0 && chekTis < 10) {
//   rez = Math.round(checkTips);
// } else if (checkTips >= 10 && chekTips < 100) {
//   while (checkTips % 5 != 0) {
//     checkTips += 0.01;
//   }
//   rez = checkTips;
// }

// console.log();
// console.log();
// console.log();

// Функции

// function calc(a, b) {
//   let rez = a * b;
//   console.log(`${a} * ${b} = ${rez}`);
// }
// calc(5, 6);

// let rez = 5;
// function calc(a = 1, b = 1) {
//   let rez = a * b;
//   return rez;
// }
// console.log(calc(5, 6));

// const testString = '   test   ';

// Задача 1

// function ltrim(str) {
//   let i = 0;
//   for (i; i < str.length; i++) {
//     if (str[i] != ' ') {
//       break;
//     }
//   }
//   return str.slice(i);
// }

// function rtrim(str) {
//   let i = str.length;
//   for (i; i >= 0; i--) {
//     if (str[i] != ' ') {
//       break;
//     }
//   }
//   return str.slice(0, i + 1);
// }

// function trim(str) {
//   return rtrim(ltrim(str));
// }

// console.log(ltrim(testString));
// console.log(rtrim(testString));
// console.log(trim(testString));

// Задача 2

// function ang(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }

//   let rez;
//   for (let i = 0; i < str1.length; i++) {
//     if (str2.indexOf(str1[i] < 0)) {
//       res = false;
//     }
//   }
//   return rez;
// }

// console.log(ang('12345', '54321'));
//проверить ещё на количество элементов в одной и другой строке

// Задача 3

// function checkCentury(centurys) {
//   Math.ceil(centurys / 100);
// }

// console.log(checkCentury(1704));

// Задача 4

// function factorial(num) {
//   let rez = 1;

//   if (num === 0) {
//     return rez;
//   }

//   if (num > 11) {
//     return 'Wow';
//   }

//   for (let i = 1; i <= num; i++) {
//     rez *= i;
//   }
//   return rez;
// }

// console.log(factorial(11));
