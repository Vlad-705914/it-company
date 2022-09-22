// Базовые операторы
// Напиши скрипт сложения и вычитания
// // const total = apples + grapes;
// // console.log(total);//91
// const total = apples - grapes;
// console.log(total);//3

// Комбинированные операторы, переопределение с +=

// let students = 100;
// // students = students + 50;
// students +=  50;// тоже самое
// console.log(students);//150

//  ++   

// let x = 0;
// console.log(x++);// 0
// console.log(x);//1
// console.log(++x);//2

//  Вместо Math

// const value = 27.5;

// console.log(~~value);// округление вниз

// Напиши скрипт который расчитывает индекс массы тела
// Для этого необходимо разделить вес на квадрат высоты человека

// Размеры в переменных указаны не как числа, а как строки
// Не целые числа могут быть указаны как 24.7  и 24,7.
// Т.е. разделителем дробной части может быть запятая

// Индекс нужно будет округлить до одной десятой после запятой.

// let wight ='88,3';
// let height = '1.75';
                    
// //  const bmi = wight / height**height;//33.16225987979812

// const bmi = 
// Number.parseFloat(wight.replace(',', '.')) /
// Math.pow(Number.parseFloat(height),2);


// console.log(bmi.toFixed(1));//28.8

// let counter = 0;

// while (counter < 10){
//     console.log('counter:', counter);
//     counter += 1;// 1,2,3,4,5,6,7,8,9
// }

// Будем заполнять номера в отеле пока текущее кол-во клиентов
// не будет равно макс. допустимому.
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// let password = '';

// do {
//     password = prompt('Введите пароль длиннее 4х символов', '');

// }while (password.length < 5);

// console.log('Ввели пароль: ', password);//Ввели пароль:  555545

//  Цикл for

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1){ // результат итерации 3

//     sum += i;// += умножает вдвое
// }
// console.log(sum);//6

//  Оператор break

// for (let i = 0; i <= 5; i += 1){
//     console.log(i);


// if (i === 3){
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
// }
// }
// console.log('Лог после цикла');

// Оператор continue

// const number = 10;

// for ( let i = 0; i < number; i += 1){
//     if(i % 2 === 0){
//         continue;
//     }
// console.log('Нечетное i:', i);//1,3,5,7,9

// }
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }




// Будем заполнять номера в отеле пока текущее кол-во клиентов
// не будет равно макс. допустимому.
let clientCounter = 26;
const maxClients = 25;
while( clientCounter < maxClients){
  console.log('Номера есть'); 
}
console.log( 'no');
