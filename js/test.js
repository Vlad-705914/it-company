

// ==========Number================


// let minuteInAnHour = 60;
// let seconndsInAnHour = 60;
// let secondInAnHour = minuteInAnHour * seconndsInAnHour;
// console.log(secondInAnHour);// 3600

// let hoursInDay = 24;
// let secondInDay = secondInAnHour * hoursInDay;
// console.log(secondInDay);// часов в сутках 86400

// let daysInYear = 365;
// let secondInAnYear = secondInDay * daysInYear;
// console.log(secondInAnYear);// second in Year // 31536000

// let age = 62;
//  age * secondInAnYear;
// console.log(age );

// ===============инкремент, декремент================
// инкремент прибавляет

// // let inFives = 0;
// // ++inFives;
// // ++inFives;
// // ++inFives;
// // console.log(inFives);// 1,2,3 

// // декремент убавляет

// let inFives = 6;
// --inFives;
// --inFives;
// --inFives;

// console.log(inFives);// 5,4,3

// =========+=, -= =========

// let score = 10;
// score += 3;
// console.log(score); // 13

// let score = 10;
// score -= 3;
// console.log(score);//  7

// let score = 10;
// score *= 3;
// console.log(score);// 30

// let score = 10;
// score /= 2;
// console.log(score);// 5

// ==========string===========

// let myString = ' 5'+'6'; читается как строка
// console.log(myString);// 56, Строки склеятся

// сложение строк

// let myStrit = 'Hello';
// let myMessage = 'Yes';
// let newStrit = myStrit + myMessage;
// console.log(newStrit); // HelloYes

// Длинна строки

// let name = 'Smith';

// console.log(name.length);// Длинна строки 5

// let sumName = 'Smith' + 'Jon';
// console.log(sumName.length);// Длинна строки 8


// ===========book====================

// let dinosaurus = ['Dinosavr', 'Тиранозавр', "Бронтозавр", "Ихтиозавр", "Диплодок" ];

// let godinosaurus = dinosaurus[3];
// dinosaurus[2]='Тиранозавр Jon'

// console.log(dinosaurus);

// ==================Добавление в массив================

// let dinosaurus = [];
// dinosaurus[0] = 'Тиранозавр';
// dinosaurus[2] = 'Dinosavr';
// dinosaurus[4] =  "Бронтозавр";
// console.log(dinosaurus);//(5) ['Тиранозавр', empty, 'Dinosavr', empty, 'Бронтозавр']


// let dinosaurus = [];
// dinosaurus[0] = 'Тиранозавр';
// dinosaurus[99] = 'Dinosavr';

// console.log(dinosaurus);//(100) ['Тиранозавр', empty × 98, 'Dinosavr']

// ======================Вложение массива в массив============
// let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", 
//     "стегозавр", 3627.5], 10];
// let newDinosaurus = dinosaursAndNumbers[2][0];//мы просим JavaScript обратиться к индексу 2 массива dinosaursAndNumbers, где находится
// массив ["трицератопс", "стегозавр", 3627.5], и вернуть значение с индексом 0 из этого вложенного массива — это первый элемент,
// "трицератопс".
// console.log(newDinosaurus);

// ======================Длина массива===================

// let manjac = ['poly', ' jon', 'silver'];
// console.log(manjac.length);// 3

// ==================Последний элемент массива======================
// let manjac = ['poly', ' jon', 'silver'];

// console.log(manjac.length - 1);//2 индекс

// console.log(manjac[manjac.length - 1]);//silver  имя

// ============Какое число(длину) мы получим=================

// let arr = ["Ваня", "Иштван", "Оля"];
// let newArr = arr;
// let twoArr = newArr.push("Петя");

// console.log(arr.length);
// console.log(twoArr);

// let arr = ['Ваня', 'Иштван'];
// arr.push('Оля');
// console.log(arr);
// let newArr = arr.slice(0, 1, 'Петя');
// console.log(newArr);
// Заменяем ВАНЮ НЕ петю
// let arr = ['Ваня', 'Иштван', 'Вася'];
//  arr.splice(0, 1, 'Петя');
// console.log(arr);

// let arr = ['Ваня', 'Иштван', 'Вася'];
// // Удаляем первый елемент

// // Показываем его
// let newArr = arr.splice(1,1 );

// console.log(newArr);
// // console.log(newArr);

// Добавили 'Mark', 'Toni'

// let arr = ['Ваня', 'Иштван', 'Вася'];
// arr.splice(0, 0, 'Mark', 'Toni');
// console.log(arr);

// Превращаем массив в строку

// let cat = ['Мурка', "Васька", " Митька"];
// console.log(cat.join());

// Превращаем строку в массив

// let cat = "Мурка,  Митька";
// console.log(cat.split());

// Вставляем разделитель в массив

// let cat = ["Мурка", "Митька"];
// console.log(cat.join('-'));

// let oneString = ['Mark', 3, 'Sofia', 5, 'Berg'];
// console.log(oneString.join('-'));//Mark-3-Sofia-5-Berg

// let landmarks = [];
// landmarks.push('Мой дом');
// landmarks.push('Дорога к нему');
// landmarks.push('Моя бывшая школа');
// let newName = landmarks.join();
// let twoName = newName.toLowerCase();
// threeName = twoName[0];
// threeName  = threeName.toUpperCase();
// let firsName = twoName.slice(0)
// let total = 
//     console.log(threeName + firsName);

// let test = ['Мой дом', 'Дорога к нему', 'Моя бывшая школа'];

// console.log(test.indexOf['Мой дом']);

// let colors = ["красный", "зеленый", "синий"];
// // colors.indexOf("синий");

// console.log(colors.join(' i, '));

// ===========Генерация случайного числа======

// console.log(Math.random()*3);

// =============Округляем===================

// console.log(Math.floor(2.7668));// 2

// Получаем случайное число из массива

// let test = ['Djon', 'Kurt',  'Robert'];
// let newTest = Math.floor(Math.random() * 4);
// console.log(newTest);

// // Можно записать короче
// console.log(test[Math.floor(Math.random() * 4)]);

// ================Случайный выбор действий===========

// let phrases = ["Это сделаем сегодня",
//     " Это сделаем завтра",
//     "Это можно вообще не делать",
//     "Это не сделаем никогда"];
// console.log(phrases[Math.floor(Math.random() *4)]);

// let oneRandom = ["глаз", "нос", "уши"];
// // 
// let twoRandom = ["вонучая", "унылая", "дурацкая"];
// let threeRandom = ["муха", "собака", "конь", "мартышка"];
// oneRandom = oneRandom[Math.floor(Math.random() * 3)];
// twoRandom = twoRandom[Math.floor(Math.random() * 3)];
// threeRandom = threeRandom[Math.floor(Math.random() * threeRandom.length)];
// // let RandomOnsult = "У тебя "  +  oneRandom  +  "лучше" +  twoRandom +  " "
// //     +  threeRandom;
// let RandomOnsult = ["У тебя ", oneRandom, "лучше", twoRandom,
//     threeRandom + "!!!"].join(" ");
// console.log(RandomOnsult);

// let oneRandom = ["голова", "шея", "грудь", "ноги"];
// let twoRandom = ["копыта", "рога", "хвост", "клюв"];
// let result1 = oneRandom[Math.floor(Math.random() * oneRandom.length)];
// let result2 = twoRandom[Math.floor(Math.random() * twoRandom.length)];
// let result = ['У тебя есть ' , result2 , ' еще более чем ', result2 + ' '].join(' -');//У тебя есть  -рога - еще более чем  -рога 
// console.log(result);

// let number = [3, 2, 1,];
// let result = number.join('>');
// console.log(result);

// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log("Это лог при вызове функции multiply");
}

// 2. Вызовы функции multiply
multiply(); // 'Это лог при вызове функции multiply'
multiply(); // 'Это лог при вызове функции multiply'
multiply();




































