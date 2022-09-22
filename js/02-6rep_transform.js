

// Напиши скрипт который объединяет все элементы массива в
// одно строковое значение.
// Элементов может быть произвольное число
// Пусть элементы массива в строке будут разделены запятой
// сначала через фор, потом через join

const friends = ['Mango', 'Polly','Kiwi', 'Ajax'];
// let string = '';

// for(const friend of friends){
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string.slice(0, string.length - 1));

// Метод join-возьми массив и сшей его

const string = friends.join(', ');
console.log(string);