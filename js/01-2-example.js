// Examle 2 - Ввод пользователя и ветвления
// Использую инструкцию if...else and prompt
// Напиши скрипт который будет спрашивать "Какое 
// официальное название JavaScript"
// Если пользователь вводит ECMAScript, то показывай
// alert co cтрокой "Верно!",
// в противном случае "Не знаете? ECMAScript!"

// const { max } = require("lodash");

// const { link } = require("fs");

// const userInput = prompt('Какое официальное название JavaScript?');
// let answer; // эту переменную переиспользуем

// if(userInput === 'ECMAScript') {
//     answer === 'Верно!';
    
// } else{
//     answer = 'Не знаете? ECMAScript!';
   
// }
// console.log(answer);

// Напиши скрипт для отображения часов и минут в консоли браузера
// в виде строки формата "14 ч. 26 мин."
// Если значение переменной minutes равно 0, то выведи стоку " 14 ч. "

// const hours = 14;
// const minutes = 0;


// if(minutes > 0 ) {
//     timestring = `${hours} ч. ${minutes} мин`;
// }else{
//     timestring = `${hours} ч.`;
// }
// console.log(timestring);

//  Пишем вместо этого тернарник

// const timestring = minutes > 0 ?
//   `${hours} ч. ${minutes} мин`:
//  `${hours} ч.` ;
// console.log(timestring);

// Напиши скрипт, который выводит в консоль строку
// "Это правильное чи сло".
// Если в prompt пользователь ввел число больше 0
// Если введен 0, выводи в консоль строку"Это ноль"
// Если передали отрицательное число, в консоли должна
// быть строка "Это отрицательное число"

// const userInput = prompt('Go number');
// const userNumber = parseInt(userInput);
// let answer;

// if (userNumber > 0) {
//     answer = 'Это правильное число';
// } else if(userNumber < 0) {
//     answer = 'Это отрицательное число';
// } else if ( userNumber === 0) {
//     answer = 'Это ноль';
// } else{
//     answer = 'Это не число';
// }
// //  if (isNaN(userNumber)) answer = 'Это не число';// Означает что это не число.
 
//  console.log(answer);
// 

// Напиши скрипт, который сравнивает числа в переменных а и b
// Если оба значения больше 100, то выведи  в консоль максимальное 
// из них. В противном случае в консоли должна быть сумма значения b
// и число 512

// const a = 120;
// const b = 100;
// let result;

// if (a > 100 &&  b >  100) {
//     if(a > b) result = a;
//     if(a < b) result = b;
//     // вместо
//     result = Math.max(a,b);

// }else{
//     result = b + 512;

// }
// console.log(result);

// Напиши скрипт, который проверяет заканчивается ли значение 
// переменной link символом / Если нет, добавь в конец значения
// link этот символ. Используй if...else

// let link = "https://my-site.com/about";

// // if (!link.endsWith('/')) link += '/';
// // вместо
// if(link[link.length - 1] !== '/') link += '/';
// console.log(link); 

// // Напиши скрипт, который проверяет заканчивается ли значение
// переменной link значение / , Если нет добавь в конец значения
// // link этот символ, но только в том случае если в link есть
// подстрока 'my-site'.Используй if...else

// let link = "https://my-site.com/about";

// // if (!link.endsWith('/')) link += '/';
// // вместо
// if (!link.endsWith('/') && link.includes('my-site') ) link += '/';
// // console.log(link); 

// link = link.includes('my-site') && !link.endsWith('/')
//  ? `${link}/`: link ;
// console.log(link);

// Напиши скрипт, который выводит в консоль браузера в зависимости
// от значения переменной hours
// Если значение переменной hours:

// < 17 выводи строку "Prending"
// >= 17 and <= 24 go string 'Exopires'
// > 24, go string 'Overdue'

// const hours = 25;
// let result;

// if(hours < 17) {
//     result = "Prending";
// }
   
//  else if(hours >= 17 && hours <= 24) {
//     result = 'Exopires'; 
//  }
//   else if( hours > 24){
//     result = 'Overdue'; 
//  }
//  console.log(result);

// Напиши скрипт для отображения времени дедлайна сдачи проекта
// Используй конструкцию if...else

// Ecли до дедлайна 0 дней выведи стоку"Сегодня"
// Ecли до дедлайна 1 день выведи стоку"Завтра"
// Ecли до дедлайна 2 дня выведи стоку"Послезавтра"
// Ecли до дедлайна 3+ дней выведи стоку"Дата в будующем"

// const daysUntilDeadline = 5;
// let result;


//  if (daysUntilDeadline === 0){
//     console.log("Сегодня");
//  } else if(daysUntilDeadline ===1 ){
//     console.log("Завтра");
//  }else if(daysUntilDeadline ===2) {
//     console.log("Послезавтра"); 
//  }else{
   
//         console.log( "Дата в будующем"); 
// }


//  console.log( "Дата в будующем");

// Рефактринг switch

// switch(daysUntilDeadline ){
// case 1:{
//      result = "Сегодня";
// break;
// }
   
// case 2 :{
//      result =  "Завтра";
//      break;
// }
//    case 3:{
//     result = "Послезавтра"; 
//     break;
//    }    
           
        
//             default:
//             result = "Дата в будующем";
// } 

// console.log( "Дата в будующем");

// Напиши цикл for который выводит в консоль браузера числа 
// по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;
 
// for (let i = min; i <= max; i += 5 ){
// if (i % 5 === 0)
// console.log('number:', i);
// }
// Напиши скрипт который будет спрашивать логин с помощью prompt
// и логировать результат в консоль браузера

// Если посетитель вводит "Админ", то промт запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - выветси строку "Отмена"
// В противном случае вывести " Я вас не знаю"

// Пароль проверять так:

// Если введен пароль "Я админ", то вывести строку "Здравствуйте"
// Иначе вывести строку "Неверный пароль"

// const login = prompt('логин');
// console.log('login', login);
// if( login === 'Админ'){
//     const password = prompt('пароль'); 
//     console.log('password:', password);

//     if(password === "Я админ" ){
//         console.log("Здравствуйте");
//     }else{
//         console.log("Неверный пароль");
//     }
    

// } else{
//   if(!login || login === null){
//     console.log("Отмена");
// }else{
//     console.log(" Я вас не знаю");
// }
// }

//  real life admin & password

function checkLoginEndPassword(login,password) {
    if(login === 'Админ'){
    if(password === "Я админ" ) {
                console.log("Здравствуйте");
            } else {
                console.log("Неверный пароль");
            }
} else {
      if(!login || login === null){
        console.log("Отмена");
    } else {
        console.log(" Я вас не знаю");
    }
    }
}

const login = prompt('логин');
console.log('login', login);

const password = prompt('пароль'); 
    console.log('password:', password);

    console.log(checkLoginEndPassword(login,password));














