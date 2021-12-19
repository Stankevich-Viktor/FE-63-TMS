// const body = document.body;
// const div = document.createElement('div');
// const text = document.createTextNode('Hello World');

// div.append(text);

// body.prepend(div);

// body.insertAdjacentHTML('beforeend',)

// function createList(num) {
//   const ul = document.createElement('ul');
//   for (let i = 0; i < num; i++) {
//     const li = document.createElement('li');
//     li.classList.add('list-item');
//     li.append(i + 1);
//     ul.append(li);
//   }
//   document.body.append(ul);

//   return ul;
// }

// console.log(createList(4));

function clock() {
  const text = document.createElement('p');
  const textValue = document.createTextNode;

  text.textContent = '00';

  document.body.append(text);

  setInterval(() => {
    text.innerText = +text.innerText + 1;
  }, 1000);
}

clock();
