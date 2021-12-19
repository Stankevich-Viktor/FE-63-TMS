let str = '1 12 123 1234';

function findWord(sent) {
  let array = a.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
      word = array[i];
    }
  }

  return `Самое длинное слово: ${word}, его длинна: ${max} символов`;
}

console.log(findWord(str));
