// =====switch========break 

// let employees = 2;
// let price;

// switch (employees) {
//   case 9:
//     price = 20;
//     break;// если условие совпадает break останавливает поиск
//   case 2: //case это employees
//     price = 50;
//     break;
    
// }
//  console.log(price);// 50

// ======default===============


// let employees = 9;
// let price;

// switch (employees) {
//   case 9://case это employees
//     price = 20;
//     console.log('test');// Можно вставить строку// test
//     break;
//   case 6: 
//     price = 50;
//     break;
//   case 7: 
//     price = 80;
//     break;
//   default:
    
//     console.log('Такого здесь нет');//Такого здесь нет
// }

// console.log(price);

// ======Сравнение========================
// let employees = 4;
// let price;
// // Говорит если от 1 до 2 price = 20, от 3 до 4 price = 50
// switch (employees){
//   case 1:
//   case 2:    
// price = 20;
//     console.log('test');// Можно вставить строку// test
//     break;
//   case 3:
//   case 4:
//     price = 50;
//     break;
//   case 5:
//   case 5:
//   price = 80;
//     break;
//   default:
    
//     console.log('Такого здесь нет');//Такого здесь нет
// }

//  console.log(price);
 

// Напиши скрипт доставки товара
// Опция хранится в переменой option: 1 - самовывоз, 2 - курьер, 3 - почта

//  В переменную message записать сообщение в зависимости от Опции
// "Вы сможете забрать товар завтра с 12:00 до 18:00"
// "Курьер доставит заказ завтра с 9:00 до 18:00"
// "Посылка будет отправлена сегодня"
// "Вам перезвонит менеджер"

// let option = 8;
// let message;

// switch (option) {
//   case 1:
//     message ="Вы сможете забрать товар завтра с 12:00 до 18:00";
//     break;
//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;
//   default:
//     message =  "Вам перезвонит менеджер";
    
// }
// console.log(message);

// Напиши скрипт который подсчитывает общую сумму з / плат работников
// Кол - во работников хранится в переменной employees
// З / плата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// const salary = 500;
// const employees = 5;
// let totalSalary;
// Расшифровывается так: i = 0 идем дальше 0 < 5(да(true)) идем дальше
// i += 1(к нулю + 1) = 1, идем дальше.Как только доходим до 5 цикл прекращается(false)
// и выполняется то, что ниже.Например console.log(i);// 1
// for (let i = 0; i < 5; i +=1)                         2
//                                                       3
//                                                       4


// Сделать вары
// const maxSalary = 5000;
// const minSalary = 500;
// const employees = 5;
// let totalSalary = 0;

// // Перебрать работников в цикле
// for (let i = 0; i <employees; i += 1){
  
// // Сгенерить случайное з / п
 
//   let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`Зарплата работника${i} - ${salary}`);
//  // Прибавить к тотал
 
//   totalSalary += salary;
// }
// console.log('total:',totalSalary);

// Напиши скрипт всех четных чисел
// которые входят в диапазон от мин до макс
// Например если min = 0 и max = 5, то диапазон 0 - 5, и
// в нем два четных числа 2 и 4, их сумма 6


// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {// 
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {// Проверяем на четность
//     console.log(i);
//     total += i;// 12
//   }
// }
//     console.log(i);
//     total += i;// 12
//   }
// }
// =========Логика от обратного, более совершенный===


// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {//
//   if (i % 2 !== 0) {//
//     console.log('No even:', i);// Проверяем плохой кейс т.е если 
//     // нечетное иди дальше  
//     continue;
   
// }
// console.log('Even:',i);
//     total += i;
 
// }
// console.log('Total:', total);//6


// Напиши скрипт обработки покупки товара в магазине

// Баланс пользователя хранится в переменной balance

// Сумма покупки хранится в переменной payment

// Перед проверкой вывести сообщение:
// "Общая стоимость заказа[число] кредитов. Проверяем кол-во средств на счету"

// Если сумма покупки не превышает баланс:
// Вычесть из баланса сумму покупки
// Вывести сообщение "На счету осталось [число] кредитов"
// Если сумма покупки превышает баланс:
// Вывести сообщение "На счету недостаточно средств"
//  в консоль вывести сообщение: "Операция завершена"
 
// cоздаем вары

// let balance = 10000;
// const payment = 2000;
// console.log(`"Общая стоимость заказа ${payment} кредитов. Проверяем кол-во средств на счету"`)
// // условие если сумма покупки не превышает баланс
// if (payment <= balance) {
//   balance -=  payment;
//  console.log(` "На счету осталось ${balance} кредитов"`);
// } else {
  
//   console.log("На счету недостаточно средств");
// }
// // условие если сумма покупки превышает баланс
// console.log("Операция завершена");

// Напиши скрипт подсчета суммы покупки со скидкой в зависимости
// от потраченной за все время суммы(парнерская программа)

// Общая сумма потраченного хранится в переменой totalSpent
// Сумма текущего платежа хранится в переменной payment'

// Скидка хранится в переменной discount

// Если потрачено от(100 до 1000) - бронзовый партнер 2%
// Если потрачено от(1000 до 5000) - серебрянный партнер 5%
// Если потрачено от(больше 5000) - золотой партнер 5%

//   Если потрачено меньше 100 не партнер, скидка 0 %
  
//   Вывести сообщение:
//     "Оформляем заказ на сумму[сумма] со скидкой[сумма]% ",

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;


//  if (totalSpent > 100 && totalSpent < 1000) {
  
//   console.log('бронзовый партнер 2%');
//   discount = 0.02;
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   console.log('серебрянный партнер 5 %');
//   discount = 0.05;
// } else if(totalSpent > 5000) {
//   console.log('золотой партнер 10 %');
//    discount = 0.1;
//  } else {
//    console.log('не партнер, скидка 0 %');
// }
// payment -=  payment * discount;

// console.log(` Оформляем заказ на сумму ${payment} со скидкой ${discount *100} % `);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line


// switch(password){
//   case password === null:
//    message = "Canceled by user!";
//     break;
//   case password === ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;
//   default:
//      message = "Access denied, wrong password!";
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// # 33

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// # 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if(message.length <= maxLength){
//   result = message;
// } else if(message.length > maxLength){
//   result = message.slice(0, maxLength) + ('...');
// }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log();
// console.log();

// # 36
 
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//  result = message.toLowerCase().includes('spam') || 
//   message.toLowerCase().includes('sale') ? true:false;
  
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));




















