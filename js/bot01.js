// Объяви две переменные, productName для названия товара и 
// pricePerItem для хранения цены за штуку.
//  При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// const pricePerItem = 2000;
// const priceName = 'Droid';

// console.log(priceName);
// console.log(pricePerItem);

// Имя товара изменили на "Repair droid" и увеличили его цену 
// на 1500 кредитов. Переопредели значения переменных 
// pricePerItem и productName после их объявления.

// let priceName = 'Droid';
// let pricePerItem = 2000;

// priceName = 'Repair droid';
// pricePerItem = 1500;

// console.log(priceName);
// console.log(pricePerItem);

// Объяви следующие переменные используя ключевое слово
//  const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

//---------- 4-----------

// Дополни код, присвоив переменной totalPrice выражение для подсчёта
//  общей суммы заказа. Переменная pricePerItem хранит цену одной 
//  единицы товара, а orderedQuantity - количество единиц товара в заказе.

//  const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// ---------5--------------

// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
//  "You picked <имя товара>, price per item is <цена товара> credits".
//   Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem.
//    Используй синтаксис шаблонных строк.


//    const productName = "Droid";
// const pricePerItem = 3500;
// let message = (`You picked ${productName}, price per item is ${pricePerItem} credits`);

// console.log(message);

// ----------6-------------

// Магазин по продаже ремонтных дроидов готов к открытию,
//  осталось написать скрипт для их заказа. Объяви 
//  переменные и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате 
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = (`You ordered droids worth ${totalPrice} credits. 
// Delivery (${deliveryFee} credits) is included in total price.`);
// console.log(message);

// ----------7----------------

// Функция - это подпрограмма, независимая часть кода, предназначенная

// для многократного выполнения конкретной задачи с разными начальными значениями.

// Функцию можно представить как чёрный ящик, она получает что-то на входе

// (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).

// // 1. Объявление функции multiply
// function multiply() {
//   // Тело функции
//   console.log("multiply function invocation");
// }

// // 2. Вызовы функции multiply
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// Объявление функции начинается с ключевого слова function,

// за которым идёт её имя - глагол отвечающий на вопрос «Что 
//  сделать?» и пара круглых скобок. Тело функции заключено в 
//  фигурные скобки {} и содержит инструкции, которые необходимо 
//  выполнить при её вызове. Затем, когда необходимо, функция вызывается
//   с помощью имени и пары круглых скобок.

//   Объяви функцию sayHi, внутри которой добавь console.log() со строкой
//    "Hello, this is my first function!". После объявления вызови функцию sayHi.

//    function sayHi() {
//     console.log("Hello, this is my first function!"); 
//    }
//    sayHi();

// ---------8---------------

// В круглых скобках после имени функции идут параметры - перечисление данных, 
// которые функция ожидает при вызове.

// Параметры - это локальные переменные доступные только в теле функции. 
// Они разделяются запятыми. Параметров может быть несколько или вообще их может не быть, 
// тогда записываются просто пустые круглые скобки.

// При вызове функции, в круглых скобках можно передать аргументы - 
// значения для объявленных параметров функции.

// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }
  
  // 2. Передача аргументов
//   multiply(2, 3, 5); // Результат умножения равен 30
//   multiply(4, 8, 12); // Результат умножения равен 384
//   multiply(17, 6, 25); // Результат умножения равен 2550

//   Порядок передачи аргументов должен соответствует порядку объявленых
//    параметров: значение первого аргумента будет присвоено первому параметру,
//     второго аргумента второму параметру и т. д.

// Задание
// Функция add должна уметь складывать три числа и выводить результат в
//  консоль. Добавь функции add три параметра a, b и c, которые будут 
//  получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>",
//  где <result> это сумма переданных чисел.

// function add (a,b,c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// -------------9---------------

// Оператор return используется для передачи значения из тела функции во внешний код.
//  Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), 
// и возвращает указанное значение в то место кода, где функция была вызвана.

// function multiply(x, y, z) {
//     console.log("Код до return выполняется как обычно");
  
//     // Возвращаем результат выражения умножения
//     return x * y * z;
  
//     console.log("Этот лог никогда не выполнится, он стоит после return");
//   }
  
//   // Результат работы функции можно сохранить в переменную
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30
  
//   result = multiply(4, 8, 12);
//   console.log(result); // 384
  
//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

//   Оператор return без явно указанного значения возвращает 
//   специальное значение undefined. При отсутствии return в теле 
//   функции, она все равно вернёт undefined.

// Задание
// Дополни код функции add так, чтобы она возвращала результат 
// сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//     // Change code below this line
//   return a + b + c;
  
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ------------10------------

// Функция makeMessage(name, price) составляет и возвращает 
// сообщение о покупке. Она объявляет два параметра, значения 
// которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка 
// "You picked <product name>, price per item is <product price> credits", 
// где <product name> и <product price> 
// это значения параметров name и price. Используй синтаксис шаблонных строк.

// это значения параметров name и price. Используй синтаксис шаблонных строк.

// const   productName ='name' ;
// const productPrice = 'price';
// let message = (`"You picked ${productName}, price per item is ${productPrice} credits"`);
// console.log(message);

// function makeMessage (name, price) {
//     // Change code below this line
//     const message = (`"You picked ${name}, price per item is ${price} credits"`);
//      console.log(message);

//     return message;
//   };
  
//  makeMessage('Radar', 6150);
//  makeMessage('Scanner', 3500);
//  makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// ----------11--------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
  
//   const message = (`"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`);
  
//     // Change code above this line
//     return message;
//   }

 
// (makeOrderMessage(2, 100, 50)`"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`);
// (makeOrderMessage(4, 300, 100)`"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`);
// (makeOrderMessage(10, 70, 200)`"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`);

// 

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
  
//   const message = (`"You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price."`);
  
//     // Change code above this line
//     return message;
//   }
//   console.log(makeOrderMessage(2, 100, 50));
//   console.log(makeOrderMessage(4, 300, 100));
//   console.log(makeOrderMessage(10, 70, 200));

// ------------13 ----------------------


// Функция isAdult объявляет один параметр age (возраст), 
// значение которого будет задаваться во время её вызова.
//  Присвой переменной passed выражение проверки возраста 
//  пользователя на совершеннолетие. Человек считается совершеннолетним
//   в возрасте 18 лет и старше.


// function isAdult(age) {
//     // Change code below this line
//     const passed = isAdult >= age ? true : false;
   
   
  
//     // Change code above this line
//     return passed;
//   }
//   console.log(isAdult(20));
//   console.log(isAdult(14));
//   console.log(isAdult(8));
//   console.log(isAdult(37));

// -----------14------------------

// Функция isValidPassword(password) проверяет равенство сохранённого 
// и введённого паролей и возвращает результат проверки - буль true или false.
//  Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый 
//  пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого 
// и сохранённого ранее паролей. Результатом выражения проверки должно быть true,
//  если значения совпадают, и false, если нет.

//  function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = SAVED_PASSWORD === password ;
  
//     // Change code above this line
//     return isMatch;
//   }

// console.log(isValidPassword("mangodab3st")); // false
// console.log(isValidPassword("kiwirul3z"));// false
// console.log(isValidPassword("jqueryismyjam")); // true

// --------------15--------------------

// Добавь выражение проверки совершеннолетия пользователя,
//  значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок
//  if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается
//  строка "You are a minor".

// function checkAge(age) {
//     let message;
  
//     if (age >= 20) { // Change this line
   
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
//    console.log(checkAge(20));
//    console.log(checkAge(8));
//    console.log(checkAge(14));
//    console.log(checkAge(38));
// const string = "JavaScript is awesome".length;
// console.log(string);

// const target = 2;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }








