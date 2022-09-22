// Длинная строка, свойство length
// const message = 'В этой строке 26 символов.';

// import { includes } from "lodash";

// console.log(message.length);

// Конкатенация строк 

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// Напиши скрипт который выдает строку в формате:
// " Гость х у поселяется в z номер   q " 
// подставьте вместо x y z q значение переменных

// const room = 716;
// const type = 'VIP';
// // const welcomeMsg ='Guest ' + firstName +' ' +  lastName + ' поселяется в '+ type +' ' + 'номер ' + room ;
// const welcomeMsg = `Guest ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// console.log(welcomeMsg);

// Шаблонная строка(template string)
// Возвращаемся к составлению строки поселения в отель.

  

// const quantity = 15;
// const orderMsg = `Вы заказывали ${quantity} холодильников`;

// console.log(orderMsg);

// Нормализация с методом toLowerCase()

// "Что ищем?"

// Поиск в строке методом includes()
// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'SamsUng';
// // console.log(brand[1]);//a- это индекс
// console.log(brand.slice(3));//sung-вырезает начиная с 3 символа
// console.log(brand.slice(1).toLowerCase());//amsung-вырезает и приводит к регистру
// brand = brand[0] + (brand.slice(1).toLowerCase());
// console.log(brand);//Samsung


// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная компания #fatlivestmaster';

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// console.log(string2.toLowerCase().includes(blackListedWord2));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));

// Логическое И ( оператор &&)
// запинается на лжи
// возвращает то, на чем запнулось, или последний операнд

// console.log(4 && 8 && 'mango' ); // mango

// Логическое ИЛИ (оператор ||)
// запинается на правде
// возвращает то на чем запнулось, или последний 

// console.log(4 || 5 || 10); // 4

// Логическое НЕ (оператор!)
// Делает инверсию> ложь > правда

// console.log(!false);// true