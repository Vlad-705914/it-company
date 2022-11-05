// const add = function(x,y){
//     console.log('Execute add');





//     return x + y;
//     // Это возврат результата функции, 
//     //  и прекращает работу функции
// };

// const r1 = add(5, 3);
// console.log(r1);// 8
// const r2 = add(9, 6);
// console.log(r2);//15

// Стек вызовов
// Интерпритатор встречает fnA(); и заходит внутрь тела fnA();  
// const fnA = function(){
//     // видит   console.log('Execute function A'); и 
//     // выполняет его, выходит и снимается со стека
//     console.log('Execute function A');
//     // Тут он видит fnB();, т.е. из функции он выйти не может
//     // и ставит на стек fnB(), заходит в функцию fnB = function() 
//     // выполняет ее и видит fnС(), заходит в функцию fnC = function(), и потом в
//     // обратном порядке снимаются все функции


//     fnB();
// };
// const fnB = function(){
//     console.log('Execute function B');

//     fnC();
// };
// const fnC = function(){
//     console.log('Execute function C');
// };

// fnA();

// fnB();

// fnC();

// Функция calculateTotalPrice(items)
// которая принимает массив цен(чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for(const value of cart){
//     total += value;
// }
// console.log(total);

// const calculateTotalPrice = function(items){
// console.log(items);
// let total = 0;
// for(let item of items){
   
//      total += item; 
      

// }
// return total;
// };

// console.log(calculateTotalPrice([54, 28, 105]));
// console.log(calculateTotalPrice([17, 120, 12]));
// console.log(calculateTotalPrice([12, 25, 90]));

// Функция LogItems(items) для перебора 
// логированного массива

// const LogItems = function(items){
// for(const item of items){
//     console.log(item);
//     // Просто выводим в консоль
// }
// };


// LogItems(['Mango', 'Kiwi', 'Ajax']); 
// LogItems(['1', '2', '3']); 
// LogItems(['keyboard', 'headphone', 'time']); 

// Функция (findLoginAllLogins , login) для поиска логотипа
// Если логина нет, вывести сообщение
// "Пользователь [login] не найден"
// Если нашли логин вывести сообщение
// "Пользователь [login]  найден"

// const logins = [' adnnslij', 'lsfjslf', ' loginfind'];
// const loginToFind = 'lsfjslf';


// const message = logins.includes(loginToFind)?
// `Пользователь ${loginToFind}  найден`:
// `Пользователь ${loginToFind} не найден`;


// console.log(message);

// const findLogin = function(allLogins , loginToFind){
    
    // let message = `Пользователь ${loginToFind} не найден`;
//    for(const login of allLogins){
//     if(login === loginToFind){
//         return `Пользователь ${loginToFind}  найден`;  
//     }

//    }
  
//    return `Пользователь ${loginToFind} no найден`;

// Best solution(решение)

// return allLogins.includes(loginToFind)?
// `Пользователь ${loginToFind}  найден`:
// `Пользователь ${loginToFind} не найден`;

// };

// console.log(findLogin(logins,' adnnslij'));
// console.log(findLogin(logins,'lsfjslf'));
// console.log(findLogin(logins,' loginfind'));
// console.log(findLogin(logins,' loginfin'));



// Самое маленькое число
// const numbers = [23, 45, 7, 9, 8, 1];

// let smalletNumber = numbers[0];

// for(const number of numbers){
//     if(number < smalletNumber )
//     smalletNumber = number;
// }

// console.log(smalletNumber);



// const findLoginAllLogins = function(numbers){
// let smalletNumber = numbers[0];
//  for(const number of numbers){
//         if(number < smalletNumber ){
//             smalletNumber = number;
//         }
        
//     }
//     return smalletNumber;
// };
// console.log(findLoginAllLogins([23, 78, 7, 9, 8, 1]));
// console.log(findLoginAllLogins([23, 45, 7, 9, 8, 1]));
// console.log(findLoginAllLogins([23, 54, 7, 9, 8, 1]));

// Если строка JavaScript сделай jAVAsCKRIPT

// const string = 'JavaScript';
// const letters = string.split('');
// let InverString = '';

// for(let letter of letters ){
//     const isEqual = letter === letter.toLowerCase();
    
//     InverString  += isEqual?
//     letter.toUpperCase():
//     letter.toLowerCase()
//     ;
// }
// console.log(InverString);


            // Function

// const changeCase = function(string){
//     const letters = string.split('');
// let InverStringп = '';

// for(let letter of letters ){
//     const isInToLowerCase = letter === letter.toLowerCase();
    
//     InverString  += isInToLowerCase?
//     letter.toUpperCase():
//     letter.toLowerCase()
//     ;
// }
// return InverString;
// };

// console.log(changeCase('JavaScript'));
// console.log(changeCase('JavaSript'));
// console.log(changeCase('Jpo99'));

// Напиши функцию slygify(string) которая получает строку и 
// возвращает URL - 
// Строка состоит из букв и пробелов

// const title = ' Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');

// const slug = title.title.toLowerCase().split(' ').join('-');
// console.log(slug);


// const slygify = function(string){
//     const normalizedTitle = string.toLowerCase();
//     const words = normalizedTitle.split(' ');
//     const slug = words.join('-');
//     // заменяем одной строкой
//     const slug1 = string.toLowerCase()
//     .split(' ').join('-');

//     // или так

//     return string.toLowerCase()
//     .split(' ').join('-');
// };

// console.log(slygify(' Top 10 benefits of React framework'));
// console.log(slygify('jhk jgkh gjh'));
// console.log(slygify('kjkgiu7yi7yi'));


//  function arguments

// const fn = function(a, b, c,...args){
//     console.log(`${a} ${b} ${c}`);
//     // это остальные аргументы после a, b, c,записаны в args
//     // как массив 
//     console.log(args);//[3],  [5, 4], [7, 9, 11]

//     // for(const arg of args){
//     //     console.log(arg);
//     // }
// };

// fn('hello',1,2,3);//hello 1 2 это параметр а
// fn('yes',2,4,5,4);//yes 2 4    это параметр в
// fn('hi',5,6,7,9,11 );//hi 5 6  это параметр с

// const add = function(...args) {
//     console.log(args);

//     let total = 0;

//     for(const arg of args ){
//       total += arg;
 
//     }
//     return total;
// };

// console.log(add(1,3,5));
// console.log(add(3,5,7,9));


// -----------Фильтр Функция---------------

// Напиши функцию filterNumber(array,[numbers])которая :
// Первым аргументом принимает массив чисел
// после первого аргумента может быть множество аргументов
// которые могут быть числами.

// Функция должна вернуть новый массив в котором будут только
// те аргументы, начиная со второго
// для которых есть аналог в оригинальном массиве.

// const filterNumber = function(array,...args){
//     console.log('args',args);
//     console.log('array',array);
//     const uniqueElement = [];
//  for(const element of array){

//     if(args.includes(element)){
//         console.log(`${element} это и есть нужные элементы`);
//         uniqueElement.push(element);

//     }
// // console.log(args.includes(element));
//  }
//  return uniqueElement;
// };


// console.log(filterNumber([1,2,3,4,5], 10, 15, 2, 3, 0));
// console.log(filterNumber([10,15,25,30], 11, 15, 4, 3, 0));
// console.log(filterNumber([100,200,300,400,500], 15, 19, 200, 3, 64));

//  function calculateEngravingPrice(message, pricePerWord) {
//     let result = 0;
//     const strings = message.split(' ');
//    for(const string of strings){
   

   
//  result =  string.lenght ;
//  console.log(result);

//    }
//    return  result;
// }
    
   
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
//  console.log (calculateEngravingPrice("Web-development is creative work", 20));

// function makeArray(firstArray, secondArray, maxLength) {
//     let result   ;
//     // Change code below this line
//   let newArray =  firstArray.concat(secondArray);
  
// result = newArray.slice(0, maxLength);
// return result;

    
//   }
  
 
  

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity  ;
  // Change code below this line
if( totalPrice > customerCredits ){
 message = "Insufficient funds!"; 
}else{
 message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
}  // Change code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(500, 10, 5000));
 
