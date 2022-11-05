// const playlist = {
//     name:"Мой суперлист",
//     rating: 5,
//     tracks:['track-1, track-2'],
//     trackCount:3,
// };
// console.log(playlist);

const { clear } = require("console");
const { add, remove } = require("lodash");

const fn = function (myObject){
    console.log(myObject);
};
fn({a: 1, b:2});

const rtfm = function(){
    return { a:5};
}
console.log(rtfm());

// Получаем доступ к объекту  через точку

// const playlist = {
//     name:"Мой суперлист",
//     rating: 5,
//     tracks:['track-1, track-2'],
//     trackCount:3,
// };
// // Добавление елемента
// playlist.ghghhk =5;

// console.log(playlist);
// console.log(playlist.tracks);//['track-1, track-2']
// console.log(playlist.rating); //5
// console.log(playlist.name);//Мой суперлист

// Когда имя свойства хранится в переменной

// const propertyName ='tracks';
// console.log(propertyName.propertyName);//undefined
// console.log(playlist[propertyName]);// Редко используется
// Редко используется

// ===============Короткая запись свойства================

const username = 'Mango';
const email = 'mango@mail.com';

// const signupData = {
//     username : username,
//     email: email, 
// };
// =========сокращаем==============

const signupData = {
    username ,
    email, 
};
console.log(signupData);

// ===========input name = 'color'value = 'tomato'=======

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//     [inputName]:inputValue//color:tomato
// };
// console.log(colorPickerData);

//   Ссылочный тип {} === {}
const a = {x:1, y:2};
const b = a;

console.log(b===a);//true
// добавим еще свойства а, b
a.c = 177;
b.c = 100;
console.log(a);//{x: 1, y: 2, c: 100}
console.log(b);//{x: 1, y: 2, c: 100}

// =======Методы объекта и this при обращении к свойствам в 
// методах

// const playlist = {
//     name:"Мой суперлист",
//     rating: 5,
//     tracks:['track-1, track-2'],
//     trackCount:3,
   
    // old scool
   
    // getName: function () {
    //     console.log(' Ага это getName :)');
    // },

    //  new
    
// getName  (a) {
//         console.log(' Ага это getName :)', a);
//     },
// };
// console.log(playlist);
// Добавление елемента
// playlist.ghghhk =5;

// playlist.getName(5);

// ========Методы объекта и this при обращении к свойствам 
// в методах=========================

// const playlist = {
//     name:"Мой суперлист",
//     rating: 5,
//     tracks:['track-1, track-2'],
//     trackCount:3,
//     changeName(newName){
// console.log('this внутри chargeName:', this);
// this.name = newName;
//     },
// };

   
   

// playlist.changeName('Новое имя');
// console.log(playlist);
  
// const playlist = {
//     name:"Мой суперлист",
//     rating: 5,
//     tracks:['track-1, track-2'],
//     trackCount:3,
//     // Добавить, через точку
//     changeName(newName){
// console.log('this внутри chargeName:', this);
// this.name = newName;
//     },
//     // Добавить, т.к. это массив то push()
//     addTrack(track){
// this.tracks.push(track);
//     },
//      // Добавить просто перезаписываем новое значение
//      updateRating(newRating){
// this.rating = newRating;
//      },
//     //  При вызове вернет текущую длинну массива
//      getTrackCount(){
//         return this.tracks.lenth;
//      },
// };

   
// playlist.changeName('Новое имя');
// console.log(playlist);

// playlist.addTrack('новый трек 1');
// console.log(playlist.getTrackCount());
// // При добавлении счетчик обновляется
// playlist.addTrack('новый трек 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

// =================Перебор через for...in и Object.keys[values]entries 

const feedback = {
    good : 5,
    neutral : 10,
    bad : 3,
};
// Получаем массив ключей из объекта
let totalFeedback = 0;

// const keys = Object.keys(feedback);//(3) ['good', 'neutral', 'bad']
// // 
// console.log(keys);
// //Перебираем с помощью for...of
// for(const key of keys){
//     console.log(key);
//     //как получить значение этих ключей
//     console.log(feedback[key]); 
//     totalFeedback += feedback[key];
// }
// console.log( 'totalFeedback:',totalFeedback);

// используем values================

// возвращает массив значений

const values = Object.values(feedback);
console.log(values);//(3) [5, 10, 3]

for(const value of values){
    console.log(value);
    totalFeedback += value;
}
console.log( 'totalFeedback:',totalFeedback);//totalFeedback: 18

// =======Работа с коллекцией(массивом объектов)===

// const friends = [
// {name : 'Mango', online: false},
// {name : 'Kiwi', online : true},
// {name : 'Poly', online : true},
// {name : 'Ajax', online : false},
// ];
// console.table(friends);

// for( const friend of friends){
//     // console.log(friend);
//     // получаем имя друга
//     console.log(friend.name);

//     friend.newprop = 555;
// }
// console.table(friends);

// Ищем друга по имени



// const friends = [
//     {name : 'Mango', online: false},
//     {name : 'Kiwi', online : true},
//     {name : 'Poly', online : true},
//     {name : 'Ajax', online : false},
//     ];
//     console.table(friends);

//     const findFriendsName = function(allFriends, friedName) {

//         for(const freind of allFriends){
//             console.log(freind);
//             // получаем доступ к свойству каждого элемента
//             console.log(freind.name);

//             if(freind.name === friedName){
//                 return 'Yes';
//             }
//         }
//         return 'No';
//     };
    
   

// console.log(findFriendsName(friends,'Poly'));
// console.log(findFriendsName(friends,'Chelsy'));

// ====Из нашего массива друзей получить их имена

const friends = [
    {name : 'Mango', online: false},
    {name : 'Kiwi', online : true},
    {name : 'Poly', online : true},
    {name : 'Ajax', online : false},
    ];
    console.table(friends);

    const findFriendByName = function(allFrieds, friendName){

};

const getAllNames = function(allFrieds){
    const names = [];
    for(const friend of allFrieds){
// console.log(friend);
// получаем значение свойства name
console.log(friend.name);
// получаем значение свойства массива name
names.push(friend.name);

    }
    return names;//4) ['Mango', 'Kiwi', 'Poly', 'Ajax']
};
console.log(getAllNames(friends));

// =======Получаем массив друзей которые онлайн=======

const getOnlineFriends = function(allFrieds) {
    const onlineFriends = [];
    const offlineFriends = [];
    for(const friend of allFrieds){
        // console.log(friend);
        if(friend.online){
            onlineFriends.push(friend);
            
        }
        // НЕ онлайн!!!
       
        if(!friend.online){
            offlineFriends.push(friend);
            
        }
       
    }
    return offlineFriends;  
};

// console.log(getOnliLends = function(allFrieds){};

// ====Решим обе задачи=================

const getFriendByOnlineStatus = function(allFrieds) {
const friendByStatus = {
    online :[],
    offline : []
};
for(const friend of allFrieds){
    if(friend.online){
        friendByStatus.online.push(friend);
    continue;
    }
        friendByStatus.offline.push(friend);
    
}
return friendByStatus;
};

console.log(getFriendByOnlineStatus(friends));

// ========Как узнать кол-во свойств в этих объектах=====

// const x = {
//     a : 1,
//     b : 2,
//     c: 50,
//     d : 100
// }
// console.log(Object.keys(x).length);

// Работаем с коллекцией товаров в корзине
// getItems
// add(product)
// remove(productName)
// clear()
// countTotalPrice()
// increaseQuantity{productName}
// decreaseQuantity(productName)

// {name : apple, price : 50}
// {name :  strawberries, price : 70}
// {name : lemon, price : 60}
// {name : pear, price : 110}

const cart = {
 items : [],
 getItems() {},
 add(product) {},
 remove(productName){},
 clear(){},
 countTotalPrice(){},
 increaseQuantity(productName) {},//увеличить кол-во товара в корзине
 decreaseQuantity(productName) {},//уменьшить кол-во товара в корзине

};
console.log(cart.getItems());

cart .add({name : 'apple', price : 50});
cart .add({name :  'strawberries', price : 70});
cart .add({name : 'lemon',price  : 60});
cart .add({name : 'pear', price : 110}
    );
 