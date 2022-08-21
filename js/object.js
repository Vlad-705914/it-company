// Репета Модуль 3 Занятие 5 объекты
// Объект это тип данных
// const playLict = {};
//  console.log({}); - это литералы объекта



// const playList = {

// name: 'Мой супер плейлист',
// rating: 5,
// track: ['track-1, track-2, track-3'],
// trackCount : 3,
//     // a: 5,// Если другой разработчик хочет добавить например
//     // a: 5, он ставит, после ]то наи Гит Хаб весь код сохранится и добавится
// //  еще 5.

// };
// console.log(playList);// {name: 'Мой супер плейлист', rating: 5, track: Array(1), trackCount: 3}




// Это литерал обьекта в нем есть параметр(myObject)
// const fn = function (myObject) {
// // При вызове этой функции под капотом //myObject = {a:1, b:2}
//     console.log(myObject);
// }
// который этот аргумент записывает
// fn({ a: 1, b: 2 });// {a:1, b:2}



// const rtfm = function () {
//     return { a: 5 }; 
// }
// console.log({});// возвращает в консоль{ a:5}
// возврат это то же самое что присвоение


// const playList = {

// name: 'Мой супер плейлист', //name:-это ключ значения
// rating: 5,
// tracks: ['track-1, track-2, track-3'],
// trackCount : 3,
   

// };
// // Так можно достучаться до свойств
// console.log(playList.rating);// Получаем значение 5
// console.log(playList.name);//Получаем значение Мой супер плейлист
// console.log(playList.tracks); //Получаем значение tracks
// //['track-1, track-2, track-3']

//console.log(playList.rating)
// console.log(playList['rating']) Это то же самое только
//будет как строка

// console.log(playList.kjjjpu);
// // При обращении к несуществующему свойству
// // undefined

// След пример


// const playList = {

// name: 'Мой супер плейлист', //name:-это ключ значения
// rating: 5,
// tracks: ['track-1, track-2, track-3'],
// trackCount : 3,
   

// };

// console.log(playList);

// // console.log(playList.rating);
// // console.log(playList.name);
// // console.log(playList.tracks); 

// const propertyName = 'tracks';

// // console.log(playList[propertyName]);
// // console.log(playList.propertyName); так не работает

// Короткая запись свойств

// const username = 'Mango';
// const email = 'mango@MediaList.com';


// const signuData = {
//     // username: username, имя переменной:имя свойства
//     // email: email,
//     // Это нужно писать так
//     username,
//     email,

// }

// console.log(signuData);

// const name = 'Breack';

// const email = ' mail@breack.com';

// const newBreack = {
// name,
// email,    
// }

// console.log(newBreack);
// {

/* < input name = 'color' valur = ' tomato'> где то в коде есть эта строка */
// из нее мы делаем
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickedData = {
//     [inputName]: 5,
// };

// console.log(colorPickedData);// {color: 5}

// Вычисляемые свойства


// const myTest = 'good';
// const yourTest = 'bag';

// const alertTest = {   // yourTest старет 'bag'
//     [yourTest]: 7,
// };

// console.log(alertTest);//{bag: 7}  yourTest старет 'bag'


// Вызов методов


// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook()


// ========Доступ к свойствам============



// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);// значение this это весь обьект  bookShelf
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks();



// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);// Будут только значения ключв
//   // Значение свойства с таким ключом
//   console.log(book[key]); //Будут значения ключв с свойсвами

// }

//=============== Метод hasOwnProperty()===============

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";
 //Метод Object.create(animal) создаёт
 //и возвращает новый объект, связывая его с объектом animal.Поэтому можно
 // получить значение свойства legs обратившить к нему как dog.legs, хотя его 
 // нет в объекте dog - это несобственное свойство из объекта animal.


// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// // Перебираем обьект
// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if ( book.hasOwnProperty(key)) {
//     console.log(key);//значения 
    // console.log(book[key]);// значения ссвойствами
  // }

  // Если это не собственное свойство - ничего не делаем
// }


// ========Методы объекта=========

// Вызов метода

// const playList = {
//     name: 'Rock',
//     rating: 5.6,
//     tracks: ['Smocke', 'Hello', 'Yes'],
//     numbers: 99,
//     getName() { в пузатых скобках вызов функции
//         console.log('Get');//Get
//     },
// };

// playList.getName(); Это вызов метода

// ==========THIS============
// Присвоение нового имени
// const playList = {
//     name: 'Rock', Было 
//     rating: 5.6,
//     tracks: ['Smocke', 'Hello', 'Yes'],
//     numbers: 99,
//     changeName(newName) { 
//       console.log('this внутри changeName:', this);//Get
//       this.name = newName;
//     },
// };

// playList.changeName('pop'); Стало
// console.log(playList);


// ===========PUSH===========

// Добавляем новый трек

const playList = {
    name: 'Rock', 
    rating: 5.6,
    tracks: ['Smocke', 'Hello', 'Yes'],
    numbers: 99,
    changeName(newName) { 
      console.log('this внутри changeName:', this);//Get
      this.name = newName;
    },
    addTrack(track) {

      this.tracks.push(track);
    },
};

playList.changeName('pop'); 
console.log(playList);

playList.addTrack('Hip');// Add Hip
console.log(playList);

