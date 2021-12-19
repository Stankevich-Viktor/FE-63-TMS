// Функции конструкторы

function CreateObj(age, name, surname) {
  this.age = age;
  this.name = name;
  this.surname = surname;

  this.getFullName = () => {
    return this.name + ' ' + this.surname;
  };
}

let user = new CreateObj(30, 'Pasha', 'Ivanov');
let newUser = new CreateObj(25, 'Sasha', 'Petrov');

console.log(user.getFullName());
console.log(newUser.getFullName());

function getAges(array, key) {}
