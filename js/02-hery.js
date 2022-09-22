// Example 1 -  Базовые операции с массивом
// - Создайте массив genres с элементами "Jazz" и "Blues".at
// Добавьте "Рок-н-ролл" в конец
// Выведите в консоль первый элемент массива
// Введите в консоль последний элемент массива
// Код должен работать для массива произвольной длины
// -Удалите первый элемент и Выведите его в консоль
// -Вставьте "Country" 'Reggae'в начало массива





// console.log('=== Example 1 ===');
// const genres =[ "Jazz" , "Blues"];
// console.log(genres);
//  genres.push("Рок-н-ролл");
//  console.log(genres);

//  console.log(genres[0]);
//  console.log(genres[genres.length-1]);

// console.log(genres.shift());
// genres.unshift( "Country", 'Reggae');
// console.log(genres);

// ==================================================
// Example 2 - массивы и стоки

// Напиши скрипт для вычисления 
// площади прямоугольника со сторонами,
// значения которых хранятся в переменной values
// в виде строки
// значения гарантировано разделены пробелом
// Для вычисления необходимо умножить их друг на друга.
// Где S = a * b

// const value = '8 11';
// const strArr = value.split(' ');
// console.log(strArr);

// const a = parseFloat(strArr[0]);
// const b = parseInt(strArr[1]);
// const s = a * b;
// console.log('S:', s);

// =================================================
//  Example 3 Перебор массива 
// Для перебора массива fruts циклом for 
// Для каждого элемента массива выведи в консоль строку 
// в формате номер_элемента, значение_элемента  

// const fruits = ['apple', 'cherry', 'banane','pear', 'raspberry' ];

// // for (let i = 0; i < fruits.length; i += 1) {
// //    console.log(`${i+ 1}:${fruits[i]}`); 
// // }
// fruits.forEach((value, idx, arr) => {
//   console.log(`${idx+ 1}:${value}`);  
// });
// // =================================================
// Example 4 - массивы и циклы
// Напиши скрипт который выводит в консоль имя
// и телефонный номер пользователя
// Jacob - 0936385636
// Willian - 0938489675
// --------------
// В переменных names phones хранятся строки имен и 
// телефонных номеров, разделенные запятыми.
// Порядковый номер имен в телефонных строках
// указывает на соответствие. Колличеству имен и телефонов
// гарантировано одинаково.

// const names = 'Jacob, Willian ,Solomon, Artemis';
// const phones = '0936385636, 0936385636, 09356597, 09389725';
// const namesArr = names.split('.');
// const phonesArr = phones.split('.');

// console.log(namesArr);
// console.log(phonesArr);

// for(let i = 0; i < namesArr.length ; i += 1 ){
//    console.log(`${namesArr[i]} - ${phonesArr[i]}`); 

// ======================================================
// Example 6 - массивы и строки
// Напиши скрипт который разворачивает строку
// кроме первого и последнего
// Результатирующая строка не должна начинаться 
// или заканчиваться пробельным символом.
// (обратный порядок букв) и выводит ее в консоль

// const string = 'Welcome to the future';
//превращаем строку в массив и разбиваем посимвольно 
// const strArr = string.split('');
//Делаем реверс
// strArr.reverse();
// собираес с помощью join('')
//  const result = strArr.join('');
// let result = '';
// //  Можно с помощью for
// for( let i = strArr.length -1; i >= 0; i -= 1){
//     console.log(strArr);
//     result += strArr[i];
// }

// Third variante
// console.log(string.split('').reverse().join(''));



// console.log(result);

// ================================================
// Example 7
//  правильная сортировка
// ['C++', 'haskel', 'javascript', 'php', 'python', 'rudy']

// сортировка по первому символу
// ['python',  'javascript','C++', 'haskel', 'php',  'rudy']

// const langs = ['C++', 'haskel', 'javascript', 'php', 'python', 'rudy'];
// // Сортируем его 
// // langs.sort();// не пойдет

// for(let i = 0; i < langs.length; i += 1 ){

// // j = i+1 значит что сравниваем со втрого элемента
// for(let j = i+1; j < langs.length; j += 1 ){
//     console.log(langs[i],langs[j]);
//     //Делаем переменную для копии
// // если первая буква i больше чем первая j
//     if (langs[i] [0] > langs[j] [0]){
//     const tmp = langs[i];
//     langs[i] = langs[j];// меняем местами
//     langs[j] = tmp;
// } 
// }
// }
// console.log(langs);


// Example 8 - поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве
// Код должен работать для любого массива чисел
// Используй цикл для решения задачи

// const numbers =[2, 17, 94, 1, 23, 37];
// let min = numbers[0];//Условно считаем 1 номер,
// самым маленким 
// 
// Если надо найти самое большое
// let max = numbers[0];

// // console.log(Math.min(2, 17, 94, 1, 23, 37));
// // Другое решение

// for(const number of numbers) {
//     if(number <  min){
//         min = number;
//     } if(number >  max){
//         max = number;
//     }

// }

// console.log(min);
// console.log(max);



