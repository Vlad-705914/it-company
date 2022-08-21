// const friends = ['Mango', 'Ajax', 'Poly'];
// const lastIndex = friends.length-1;

// for (let i = 0; i <= lastIndex; i += 1){ Перебираем от первого добавляем
//     последнего



// //     console.log(friends[i]); КАждый елемент итерации
// // // }
// // Метод от обратного
// const logins = ['Brek', 'sTop', 'noN', 'yes'];
// const loginToFind = 'yes';

// const message = logins.includes(loginToFind) ? 'Пользователь найден' :
//     'Пользователь не найден';
// console.log(message );

// Поиск самого маленького числа в массиве

// При условии что числа не повторяются
// Метод вытягивания из мешочка по монетке

// const numbers = [51, 18, 13, 24, 85, 19];
// let smallNumber = numbers[0];// Первая монетка
// Перебрали, если та монетка что мы вытянули(number) <
//     тех что мы вытянули раньше, то она самая маленькая
// for (number of numbers){
//     if (number < smallNumber) {
//         smallNumber = number;
//    } 
// }
// console.log(smallNumber);// 13

// самое большое число

// const numbers = [51, 18, 13, 24, 85, 19];
// let bigNumber = numbers[0];
 
// for (number of numbers) {
    
//     if (number > bigNumber) {
//         bigNumber = number;
//     }
// }
// console.log( bigNumber);

// Напишите скрипт который обьединяет все элементы в в строку

// Элементов может быть произвольное кол - во
// Пусть элементы массива будут разделены запятой.

// - Сначала через фор

// Потом через join

// const friends = ['Poly', 'Mango', 'Ajax', 'Kiwi'];
// let newString ;

// // for (friend of friends) {
// //     newString = friends + (',');
// //     newString = newString .slice(0, newString.length-1);
// // }

//  Лучше так 

// newString = friends.join(' , ');
// console.log(newString);

// Напиши скрипт который заменяет регистр каждого символа в строке
// на противоположный

// Например, если строка "JavaScript" в 'jAVAsCRIPT'

// const string = "JavaScript";
// const letters = string.split('');
// let inverString = '';
// // // разбиваем строку по разделителю
// for (const letter of letters) {
//     // //   проверяем буквы в нижнем регистре
// }
// //     if (letter === letter.toLowerCase()) {
// // //    те которые в нижнем регистре, записать в нижнем
// //         // console.log(letter);
// //         inverString += letter.toUpperCase();
// //         console.log( inverString );
// //         // если это не выполнилось сделать в большом регистре
// //     } else {
// //         inverString += letter.toLowerCase;
//     // }
//     // Лучший вариант тернарник
    
//     // inverString += letter === letter.toLowerCase() ? letter.toUpperCase() :
//     //     letter.toLowerCase();Те что в нижнем регистре сделай в
//     верхнем и наоборот
// // }
    // console.log(inverString); //jAVAsCRIPT



// const title = 'Hello my friends and famile';
// let test = title.toLowerCase().split(' ').join('-');
// console.log(test);

// Сначала переводим в нижний регистр, затем split(' ') собирает в
// строку и на все это вызывается join('-')

// const array1 = [1, 3, 5, 8];
// let total = 0;
// const array2 = [1, 8, 5, 16, 9];
// let newArray = array1.concat(array2);
// for (array of newArray) {
//     total += array;

// }
// console.log(total);

// Удаление

// const carts = [
//     'Карточка 1',
//     'Карточка 2',
//     'Карточка 3',
//     'Карточка 4',
//     'Карточка 5',
//     'Карточка 6',
// ]
// console.table(carts);// Делаем таблицу


// let cartIndex = 'Карточка 3';
// cartIndex = carts.indexOf(cartIndex) // Ищем индекс
// console.log(cartIndex);//2

// let newCars = carts.splice(0, 1);

// Вставляем 

// let newCars = carts.splice(0, 0, 'Карточка ');// Добавилась 'Карточка '
// в самое начало

// Обрезаем

// let newCars = carts.splice(1, 2, 'Piton'); // После 1 индекса
// удалю 2 элемента и всавлю 'Piton'

// console.log(newCars);
// console.log(carts);

      