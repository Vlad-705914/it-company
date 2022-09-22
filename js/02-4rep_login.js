// const { includes } = require("lodash");

const logins = ['m4ngoDoge', 'Kiwidab3st', 'poly1scute',
'aj4xth3n4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;
// Начинаем с отрицания, если Пользователь не будет найден,
// в консоли будет этот текст 
// если найден делаем break

// for(let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind} не найден.`);
//     if(login === loginToFind ){
//     message = `Пользователь ${loginToFind}  найден`;
//     break;
   
// } 
// }
// console.log(message);

// если ни один из элементов массива не перезаписывается
// используем for...of


// for ( const login of logins){
//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind} не найден.`); 
    
//     if(login === loginToFind ){
//         message = `Пользователь ${loginToFind}  найден`;
//         break;
// } 
// }
// console.log(message);


// Метод includes
console.log(logins.includes(loginToFind));// true
// С его помощью перебираем массив,и возвращаем true , false.
// делаем тернарник
const message = logins.includes(loginToFind)? 
`Пользователь ${loginToFind} найден`
 : `Пользователь ${loginToFind} не найден`;
console.log(message);

