// Напиши скрипт который проверяет вхождение
// числа в отрезок обозначеный х1 и х2

// до х1
// после х2
// От х1 до х2
// До х1 или после х2

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// const res = number > x1 && number < x2;
// console.log(res);

//number > x1 && number < x2
// 50 > 10 && 50 < 30
//  true && false 
// false


//  150 < 10 || 150 > 30
// false || true
//  true
//  15 < 10 || 15 > 140
//  false || false
//  false

// console.log(`Число ${number} попадает в отрезок до ${x1}?`,number < x1);
// console.log(`Число ${number} попадает в отрезок до ${x1}?`,number > x2);
// console.log(`Число ${number} попадает в отрезок до ${x1}?`);
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок ${x1}?`, number > x2);

// const numbers = [1, 4, 6, 44, 36, 77, 95];
// let total = 0;

// for( let i = 0; i < numbers.length; i += 1 ){
//     const number = numbers[i];
//     console.log(numbers[i]);
//     if( number % 2 === 0){
//         console.log('Четное' );
//         total += number;
//     }
// }
// for(const number of numbers){
//     console.log(number);
//     if(number % 2 === 0){
//         console.log('Четное');
//         total += number;
//     }
// }




// const string = 'JavaScript';
// const letters = string.split('');
// let invertedstring = '';
// console.log(letters);

// for(const letter of letters){
//     // if(letter === letter.toLowerCase()){
//     //    console.log('Эта буква в нижнем регистре',letter); 
//     //    invertedstring += letter.toUpperCase();
//     // }else{
//     // invertedstring += letter.toLowerCase();
//     // }
//     invertedstring += letter === letter.toLowerCase()?
//     letter.toUpperCase():
//     letter.toLowerCase();


// }
// console.log(invertedstring);

// const title = 'Top 10 benefits of React framework';
// // const normalizedTitle = title.toLowerCase();

// // console.log(normalizedTitle);
// // const words = normalizedTitle.split(' ');
// // console.log(words);
// // const slug = words.join('-');


// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);



// const array1 = [5, 10, 15, 20];
// const  array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);

// for(const number of numbers){
//     total += number;
// }
// console.log(total);

// const cards = [
//     'Card -1',
//     'Card -2',
//     'Card -3',
//     'Card -4',
//     'Card - 5',
//     'Card -6',
// ];
// const cardToRemove = 'Card -1';
// // const index = cards.indexOf(cardToRemove);
// // console.log(index);
// // cards.splice(index, 1);
// // console.log(cards);
// const cardsToInsert = 'Card -7';
// const index = 3;
// cards.splice(index, 0,cardsToInsert );
//  console.log(cards);

// const cardToUpdate = 'Card -17';
// cards.splice(4, 1, cardToUpdate);
// console.log(cards);
// const cart = [33, 55, 16, 25];
// let total = 0;

// for(const value of cart){
//     total += value;
// }
// console.log(total);
// const calculatorTotalPrice = function(items){
//     let total = 0;
//     for(const item of items){
//         total += item;
//     }
//     return total;
// };

// console.log(calculatorTotalPrice([1, 2, 4,]));
// console.log(calculatorTotalPrice([22, 34, 34]));
// console.log(calculatorTotalPrice([1, 23, 34]));

// const logItems = function(items){
// for(const item of items){
//     console.log(item);
// }
// };
// logItems(['Mango', 'Ajax', 'Kiwi']);
// logItems([2, 44, 45]);
// logItems(['clava', 'phone', 'Kiwi']);

// const logins = ['neeeeo44wp', 'kiwi3wdija', 'poly1sneo'];
// const loginToFind = 'kiwi3wdija';

// const message = logins.includes(loginToFind)?
// `Пользователь ${loginToFind} найден`:
// `Пользователь ${loginToFind}  не найден`;
// console.log(message);

// const findLogins = function(alllogins, loginToFind){

//     return alllogins.includes(loginToFind)?
// `Пользователь ${loginToFind} найден`:
// `Пользователь ${loginToFind}  не найден`;
// }

// let message = `No ${loginToFind} is not find`;
// for( const login of alllogins){
// if(login === loginToFind ){
//     //  message = `Yes ${loginToFind} is to find`;
//     return `Yes ${loginToFind} is to find`;
// }
// }
// return `No ${loginToFind} is not find`;
// };
// console.log(findLogins(logins, 'neeeeo44wp'));
// console.log(findLogins(logins, 'kiwi3wdija'));
// console.log(findLogins(logins, 'poly1sneo'));
// console.log(findLogins(logins, 'uiui'));

// const numbers = [51, 18, 24, 7, 19];
// let smallNumber = numbers[0];

// for(const number of numbers){
//     if(number < smallNumber){
//         smallNumber = number;
//     }
// }
// console.log(smallNumber);

// const findSmallesNumber = function(numbers){
//     let smallNumber = numbers[0];
//     for(const number of numbers){
//         if(number < smallNumber){
//             smallNumber = number;
//         }
//     }
//     return smallNumber;
// };
// console.log(findSmallesNumber([2, 34, 45, 53, 53]));
// console.log(findSmallesNumber([2, 9, 45, 5, 53]));
// console.log(findSmallesNumber([2, 34, 98, 5, 53]));

// const changeCase = function(string){
// const letters = string.split('');
// let invertedstring = '';

// for(const letter of letters){
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedstring += isInLowerCase?
//     letter.toLowerCase():
//     letter.toUpperCase();
// }
// return invertedstring;
// };

// console.log(changeCase('lkdIIO'));
// console.log(changeCase('reutyRE'));
// console.log(changeCase('frRebR'));



// const add = function(...args){
//     console.log(args);

//     let total = 0;

//     for(const arg of args){
//         total += arg;
//     }

//     return total;
// };

// console.log(add(1, 2, 4));
// console.log(add(3, 4, 5, 8, 9, 2));

// Первый аргумент принимает массив чисел
// после первого аргумента может быть произвольное кол-во
// других аргументов которые будут числами.
// Функция должна вернуть новый массив, в котором будут только
// те аргументы, начиная со второго.
// для который есть аналог в оригинальном массиве


  


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     // let string = message.indexOf(message);
//  let result  = message.length * pricePerWord;
 
//  return result;
    // Change code above this line
//  }



// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(checkStorage(200, 20));
// console.log();
// console.log();
// console.log();

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < 4 ; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
//      console.log(calculateTotal(1));
//  console.log(calculateTotal(3));

//   const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1){ // результат итерации 3

//     sum += i;// += умножает вдвое
// }
// console.log(sum);//6

function filterArray(numbers, value) {
    // Change code below this line
   let newArray =[];
     
 for( let number of numbers){
   
   if(number > value){
   newArray = number;
   
   }
 return newArray;
 
   // Change code above this line
 }
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
   
  
  
  
    // Change code above this line
  

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));