// Функциональное выражение
// Это когда в переменной лежит ссылка на фукцию
// которая отвечает на вопрос "Что делать?"
// const add = function () {
//     console.log('Go function add');// В консоли пусто!
// };
// // Для того чтобы ее вызвать 
// add();//Go function add
// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('Go function add');
// };
// add(1,3);//1 3
// add(5,3);//5 3
// add(2,3);//2 3

// =================return ==========================

// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('Go function add');
//     return x + y;//Это возврат результата из функции
// };
// const r1 = add(1,3);
// console.log('r1:', r1);//4

// const r2 = add(5,3);
// console.log('r2:', r2);//8

// const r3 = add(5,5);
// console.log('r3:', r3);//10

//
// 
// const fn = function (){
//     return 555;//интерпритатор встретил return и 
//     // прекратил выполнение функции
//     console.log(1);//1
    
//     console.log(2); //2
    
//     console.log(3);//3  
// };
// // console.log("Результат fn()");// Если нет return будет undefined
// console.log("Результат:", fn());//555 но остальное не выполнится

// ==============================================
// Стек вызовов

// const fnA = function (){
//     console.log('Go function A');
// }
// const fnB = function (){
//     console.log('Go function B');  
// };

// const fnC = function (){
//         console.log('Go function С');  
//     };

    // fnA();//Go function A
    // fnB();//o function B
    // fnC();//Go function С

    
// const fnA = function (){
//     console.log('Go function A');
// }
// const fnB = function (){
//     console.log('Go function B');  
// };

// const fnC = function (){
//         console.log('Go function С');  
//     };
//     console.log('Лог перед вызовом А');
//     fnA();
//     console.log('Логпосле вызова А');

//     console.log('Лог перед вызовом B');
//     fnB();
//     console.log('Логпосле вызова B');

//     console.log('Лог перед вызовом C');
//     fnC();
//     console.log('Логпосле вызова C');


// Напиши скрипт функции calculateTotalPrice(items)
// которая принимает массив цен(чисел) и возвр их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for(const value of cart){
//     total += value;
// }
// console.log(total);//613

// const calculateTotalPrice = function(items){
//     console.log('Items внутри функции:',items);
//     let total = 0; 
//     for(const item of items){

//         total += item;

        
//     } 
//     return total;// return возвращет total, т.к. он
//     //  не виден 
//     // во внешнем коде
// }
// console.log(calculateTotalPrice([1, 2, 5]));//8
// console.log(calculateTotalPrice([1, 6, 9]));//16
// console.log(calculateTotalPrice([4, 6, 9]));//19

// Напиши функцию(logItems(ite,s)) для перебора и
// логирования массива

// const logItems = function(items){
//     for( const item of items){
//         console.log(item);
//     }

// }


// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([ 1, 2, 3, 4, 5]);
// logItems(['клавиатура', "наушники", "часы"]);

// ======================================
// Напиши функцию findLogin(allLogins, login) для поиска
// 
const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3n4n'];
let message;
// const loginToFind = 'aj4xth3n4n';
// const message = logins.includes(loginToFind)
// ? `Yes login ${loginToFind} found.`
// :`No login ${loginToFind} is not found`;
// console.log(message);
const findLogin = function(allLogins, loginToFind){
    //allLogins = logins
    let message = `No login ${loginToFind} is not found`;
    console.log(allLogins);
    console.log(loginToFind);

    for(const login of allLogins){
       if(login === loginToFind){
        message = `Yes login ${loginToFind} found.`
       }
}
return message;

};

console.log(findLogin(logins, 'aj4xth3n4n'));
console.log(findLogin(logins, 'poly1scute'));
console.log(findLogin(logins, 'm4ngoDoge' ));
console.log(findLogin(logins, 'kiwidab3st'));

