//                      Классы

// class Page {
//   constructor(homePage) {
//     this.homePage = homePage;
//   }

//   static getValue() {
//     console.log('42');
//   }

//   get homePageS() {
//     return this.homePage;
//   }

//   set homePageS(val) {
//     this.homePage = val;
//   }

//   relod() {
//     console.log('Reloading...');
//   }
//   getPage() {
//     console.log(this.page);
//   }
// }

// Page.getValue();

// const SomePage = new Page('google');

// // console.log(SomePage);
// // console.log(SomePage.getHomePageS);
// // SomePage.getHomePageS = 'yandex';
// // console.log(SomePage.getHomePageS);

// //                       НАСЛЕДОВАНИЕ КЛССОВ

// class ContactPage extends Page {
//   constructor(contact) {
//     this.contact = contact;
//   }

//   get getContact() {
//     return this.contact;
//   }

//   set getContact(val) {
//     this.contact = val;
//   }
// }

// const contact = new ContactPage('google/contact');

// console.log(contact);

//             СТАТИЧЕСТКИЕ  СВОЙСТВА И МЕТОДЫ

//             ПРИВАТНЫЕ И ЗАЩИЩЕННЫЕ МЕТОДЫ

// if (true) {
//   throw new Error('Неправильное число');
// }
const cur = document.querySelector('#cur');
const ras = document.querySelector('#ras');
const doh = document.querySelector('#doh');
const titleValue = document.querySelector('.title');
const inputValue = document.querySelector('.input');
const btn = document.querySelector('.btn');

const history = [];

btn.addEventListener('click', () => {
  let obj = {
    title: titleValue.value,
    amount: inputValue.value,
  };
  history.pushState(obj);
  titleValue.value = '';
  inputValue.value = '';

  render(history);
});

function render(arr) {
  let balance = 0;
  let rashod = 0;
  let dohod = 0;
  arr.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element.title + ':' + element.amount;
    list.append(li);
    balance = +element.amount + balance;
    if (element.amount > 0) {
      dohod = +element.amount + dohod;
    } else {
      rashod = +element.amount + rashod;
    }
  });

  cur.innerText = `Баланс: ${balance}`;
  ras.innerText = `Рвсход: ${rashof}`;
  doh.innerText = `Доход: ${dohod}`;
  console.log(balance, rashod, dohod);
}
