// Работаем с коллекцией карточек в trelo
// Метод splice()
// Удалить
// Добавить
// Обновить

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
    
// ];
// console.table(cards);



// // Удаление по индексу

// const cardToRemove =   'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// cards.splice(index, 1);
// console.table(cards);

// Добавление по индексу

// const cardToInsert = 'Карточка-6';
// const index = 3;

// // cards.splice(3, 0, 5, 10, 20);//Буквально с 3индеса 0-ничего
// // // не удаляя, добавь 5, 10, 20
// cards.splice(index, 0 , cardToInsert);

// console.table(cards);

// Обновление по индексу

// const cardToUpdate = 'Карточка-4';
 
// // Так находить индекс
// const index = cards.indexOf(cardToUpdate);//3

// console.log(index);//3


// // cards.splice(1, 1, 555);//Буквально на 1 индексе удали элемент
// // // и поставь вместо него 555

// cards.splice(1, 1,cardToUpdate );

// console.table(cards);



// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }




const cards = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5',];

const cardsIndex = 'Card3';

 const index = cards.indexOf(cardsIndex);
console.table(index);



