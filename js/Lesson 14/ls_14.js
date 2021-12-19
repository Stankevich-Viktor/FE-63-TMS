// Promise

// let p = new Promise(res, res) => {
//   if(ok) {
//     res('ok');
//   } else {
//     res(new Error('Not ok'));
//   }
// }
// fetch('https://api.sampleapis.com/health/professions')
//   .then((response) => response.json())
//   .then((json) => json.find((el) => el.abbeviation === 'BY'));
// // .then((by) => console.log(by))
// // .catch((err) => console.log(err))
// // .finally((data) => console.log(data));

// fetch();

// const familly = [
//   {
//     age: 56,
//     gender: 'm',
//     cartoon: 'The Simpsons',
//   },
//   {
//     age: 39,
//     gender: 'f',
//     cartoon: 'Gravity Falls',
//   },
//   {
//     age: 12,
//     gender: 'f',
//     cartoon: 'Star vs Forces of Evil',
//   },
// ];

// function createCart(url) {
//   const row = document.querySelector('.row');
//   const col = document.createElement('div');
//   const card = document.createElement('div');
//   col.classList.add('col-2');

//   const card = document.createElement('div');
//   card.classList.add('card');
//   const img = document.createElement('img');
//   img.classList.add('card-img-top');
//   card.append(img);
//   col.append(card);
//   row.append(col);
// }

// const row = document.querySelector('.row');
// row.addEventListener('click', (event) => {
//   if (event.target.tagName === 'A') {
//     event.target.closest('.card').remove();
//   }
// });

// fetch('https://api.sampleapis.com/cartoons/cartoons2D')
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((cartooon) => {});
//   })
//   .catch((er) => console.error(er));

true + false; // true
8 / '2';
'number' + 5 + 1;
5 + 1 + 'number';
7 && 2; //true
2 && 7; //true
null + 1; //null
undefined + 1; //undefind
'five' + +'two';
'true' == true;
false == 'false';
null == '';
!!'false' == !!'true';
'4' - 3;
'4px' - 3;
0 || ('0' && 1);
