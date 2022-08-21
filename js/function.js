// 1. Объявление функции multiply
// function multiply() {
//   // Тело функции
//   console.log("Это лог при вызове функции multiply");
// }

// // 2. Вызовы функции multiply
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// multiply();
// const a = 10;
//  console.log(a);

// function foo() {
//     const b = 20;
//     for (let i = 0; i < 5; i += 1){
//         const c = 30;
//   console.log(c);
//         if (i === 3) {
//             const d = 40;

//             console.log(a);
          
//             // console.log(c);
//            ;
//         }
//     }
//     console.log(d);
//       console.log(b);
// }


// foo();

// ============Основы=========================

// const add = function (x, y) {
    

//     console.log('Выполняется результат add');

//     return x + y;// Это возврат результата сложения
//      
// };

// const fn = add(6, 9); - это вызов функции
// console.log(fn); - это результат вызова 

// const fn1=add(10, 7);- это вызов функции

// const fn2 = add(6, 7);- это вызов функции

// console.log(fn1);// 17

// console.log(fn2);// 13

// console.log(add(10, 7)); // 17- это одновременно вызов 
//и результат

// const fn = function () {

//     console.log(1);
//     return;
//      console.log(1); // Это не выполнится
// }
// console.log('Result function:', fn());// Result function: undefined
// //т.к  fn() пустая

// =============return================

// const fn = function (value) {
// // Если значение value < 50 верни 'Yes < 50'
// //     если > верни 'Yes > 50'
   
//     if (value < 50) {
//         return 'Yes < 50';
//     }
//     return 'Yes > 50';

// };

// console.log(fn(40));//'Yes < 50'
// console.log(fn(600));//'Yes < 50'



// const fnA = function () {
//     console.log('A');
// };
// const fnB = function () {
//     console.log('B');
// };
// const fnC = function () {
//     console.log('C');
// };


// console.log(fnA());//undefined если есть вызов при
// // отсутствии параметров и аргуметов

// fnB();//B

// fnC();//C

// console.log(fnA) - это просто логирование, а не вызов

// console.log(fnA()) - это вызов


// const carts = [3, 45, 56, 76, 3, 87];

// let total = 0;

// for (value of carts) {
//   total += value;  
// }
// console.log(total);// 270


// ============Как буде выллядеть функция=============

// const calculatorTotalPrice = function (items) {
    
//     console.log(items);
//     let total = 0;
//     for (let item of items) {
//         total += item;
       
//     }
//  return total;
// };

// console.log(calculatorTotalPrice([3, 45, 56, 76, 3, 87]));
// console.log(calculatorTotalPrice([3, 45, 56, 76, 3, 98, 54,  87]));
// console.log(calculatorTotalPrice([3, 45, 56, 76, 45, 3, 87]));












    