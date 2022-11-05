// Парс числа с Number.parseInt() and Number.parseFloat()


// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// // const result = Number.parseInt(elementWidth);
// console.log(' elementWidt)h',  elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight', elementHeight);

// let salary = 1300.23453;
// salary = Number(salary.toFixed(3));

// console.log(salary);



// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу.';
// console.log(Number(quantity));
// console.log(Number(value));

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);

// console.log(Math.pow(3, 5));
// console.log(result);
// console.log(2**5);// Современная версия
// console.log(base**power);// Современная версия

// Напиши скрипт который просит пользователя ввести число и 
// степень,возводит число в эту степень и выводит результат

// 1. попросить ввести число и сохранить в Переменную
// let base = prompt('Go number');
// base = Number(base);
// console.log(base);


// 2. попросить ввести степень и сохранить в Переменную
// let power = prompt('Go pow');
// power = Number(power);
// console.log(power);

// 3. возвести введеные данные в степень и вывести
// const result = base ** power;

// console.log(result);
// const max = 80.7;
// const min = 10;
// const result = Math.round(Math.random() *(max - min) + min) ;
// console.log(result);

// console.log(Math.random()* (max - min)+ min);

// Math.randow()* (max - min)- min

//  Возведение в степень

// let  base = prompt('Go number');

// base = Number(base);

// console.log(base);

// let power = prompt('Go pow');
 
// power = Number(power);

// console.log(power);

// let result = base ** power;

// console.log(result);

// Напиши скрипт который вычисляет  общую сумму и сумму покупки в данное время
// а так-же сумму скидки.Напиши.Напиши

// 1. Создай вары
// 2. с помощью If...else вычисли сумму покупки и скидки
// 3. Посчитай общую сумму покупки включая скидки

// const totalSpent = 500;
// const payment = 5000;
// let discount = 0;


// if( totalSpent >= 500) {
//     console.log('Бронзовый партер, скидка 5%');
//     discount = 0.01;
// } else if(totalSpent >= 1000) {
//     console.log('Серебрянный партнер, скидка 10%');
//     discount = 0.02;
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const clients = ["Mango", "Ajax", "Poly"];
// 


function checkForSpam(message) {
    let  result  ;
    // Change code below this line
  if(message.includes(SalE)){
    result = false;
  }
 
    // Change code above this line
    return result;
  }



console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log();
// console.log();
// console.log();


 
