
// Изменяем массив, и получае элемент массива по индексу 


// const friends = ['Mang', 'Kiwi', 'Ajax', 'Poly'];
// console.table(friends);
// // Изменяем массив
// friends[1] = '1,2,3,4';
// console.log(friends);// вместо "kiwi" получаем '1,2,3,4'
// console.table(friends[1]); //'1,2,3,4'

// получаем элемент массива по индексу
// console.log(friends[1]);//'Kiwi'

// const lastIndex = friends.length - 1;
// console.table(lastIndex);//3

// Перебор массива

// const friends = ['Mang', 'Kiwi', 'Ajax', 'Poly'];

// for( let i = 0; i <= friends.length - 1; i += 1){
//      // console.log(i); //1,2,3,4 
//     //  console.log(friends[i]);//'Mang', 'Kiwi', 'Ajax', 'Poly'
//      friends[i]+= ' -1';
//     console.log(friends[i]);
// Mang -1
//  Mang -1
//  Kiwi -1
//  Kiwi -1
//  Ajax -1
//  Ajax -1
//  Poly -1
//  Poly -1
    //  for если нужен индекс
    // for...of если не нужен  

        
// }
// Посчитаете общую сумму покупок в корзине.
// 

// Напиши скрипт который подсчитывает сумму всех четных
//  чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for( let i = 0; i < numbers.length; i +=  1 ){
// //    делаем читабельную переменную 
//     const number = numbers[i];
//     if(number[i] % 2 === 0 ){
       
       
//        total += number[i];
        
//       }  
//     }

         // Упрощаем

    // for (const number of numbers){
    //     if(number % 2 === 0 ){
       
       
    //         total += number;
             
    //        }    
    // }
    // console.log('yes',total);//72

              
    // continue( если нет, пропускаем действие)
    
    // for (const number of numbers){
    //     if(number % 2 !== 0 ){
    //    console.log('Эту итерацию пропускаем',number);
    //    continue;
       
           
             
    //        } 
    //        console.log(`${number},-четное `);
    //        total += number;   
    // }

// Если нашли логин, вывести сообщение
//  "Пользователь(логин) найден"

// const logins = ['dsdild', 'kiwi4pjn', 'polyeoapo'];
// const loginToFind = 'kiwi4pn';
// // Метод от обратного сразу пишем что не найден
// let message = 'Yes, login not to find!';

// for(let login of logins){
//     if(login === loginToFind){
//         message = 'Yes, login  to find!';
//         break;
        
//     }
 
// }
// console.log(message);

// Ищем самую маленькую монетку

// const numbers = [51, 18, 13, 24, 7, 85,];
// let smallesNumbers = numbers[0];

// for(const number of numbers){
//     if(number < smallesNumbers){
//         smallesNumbers = number;
        
//     }
// }
// console.log(smallesNumbers); 

// Объединяем все элементы массива в одно 
// строковое значение

// const friends = ['Mango', 'Kiwi', 'Ajax', 'Poly'];
// let string = '';

// // for(const friend of friends){
// //     string += friend;

// // }
// string = friends.join(',');
// console.log(string);

// Перевернутая строка

// const string = 'JavaScript';
// // Разбиваем посимвольно
// const letters = string.split('');
// // создаем перевернутую строку
// let inveredString = '';
// // перебираем по буквам
// for( const letter of letters){
//     if(letter === letter.toLowerCase()){
// console.log("Эта буква в нижнем регистре",letter);

// inveredString += letter.toUpperCase();
//     }else{
//         inveredString += letter.toLowerCase();  
//     }
// inveredString += 
// letter === letter.toLowerCase()? 
// // Расшифровывается так,
// // если letter в нижнем регистре, сделай ее с верхнем,
// // и наоборот
// letter.toUpperCase():
// letter.toLowerCase();
// }
// console.log(inveredString);

// const title = 'Top 10 benefits of React framework';
// // Выводим в нижнем регистре
// // const normalizedTitle = title.toLowerCase();
// // // Превращаем  в массиве и разбиваем по словам
// // const words = normalizedTitle.split(' ');
// // // Соединяем с помощью join
// // const slug = words.join('-');

// // Цепочка вызовов или декларативный код

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// Сумма элементов двух массивов

// const array1 = [ 1, 3, 5, 8];
// const array3 = [ 1, 2, 7, 8];
// let total = 0;

//  const numbers = array1.concat(array3);
// for(const number of numbers){
//     total += number;  
// }
// console.log(total);

// Метод splice удаление, иэменение, добавление

// const array1 = ['Card 1', 'Card 2', 'Card 3', ' Card 4'];
// const newCard = 'Card 1';
// const index = array1.indexOf(newCard);// 0
// console.log(index);
// array1.splice(index, 2); 
// // \Удаляем начиная с 0 индекса 2 элемента
// console.log(array1);//['Card 3', ' Card 4']

           // добавление

           // array1.splice(1, 0, 444); 
// // После первого элемента добавь 444
// console.log(array1);//['Card 1', 444, 'Card 2', 'Card 3', ' Card 4']

            //  Замена
array1.splice(2, 1, 999);
// вместо позиции 2 удали 1 элемент и добавь 999
console.log(array1);//['Card 1', 'Card 2', 999, ' Card 4']







