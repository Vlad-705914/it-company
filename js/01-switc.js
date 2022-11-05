// Напиши скрипт стоимости отеля по кол-ву звезд
// 1-20$, 2-30$, 3-50$, 4-70$, 5-120$

// const { defaultMaxListeners } = require("events");

// Если в переменной stars что то кроме чисел 1-5, 
// выведи строку"Такого кол-ва звезд нет"

// const stars = 50;
// let price;


// if(stars === 1){
//   price = 20;
// }else if(stars === 2){
//   price = 30;
// }else if(stars === 3){
//   price = 50;
// }else if(stars === 4){
//   price = 70;
// }else {
//   console.log('Такого кол-ва звезд нет')
// }
// console.log(price);

//  вместо этого switch

// switch(stars){
//   case 1:
//     price =20;
//     break;

//     case 2:// если stars = 2, верни 30
//     price = 30;
//     break;
// }
// console.log(price);//30

// switch(stars){
//   case 1:
//     price =20;
//     break;

//     case 2:// если stars = 2, верни 30
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//     case 4:
//       price =70;
//       break;
    
//       default:
//       console.log('Такого номера нет.');
// }
// console.log(price);//50

// Меняем условия
// 1-2-20$, 3-4-50$,  5-120$

// 
// Напиши скрипт опции доставки товара:
// Опция хранится в переменной option: 1-самовывоз,
// 2- курьер, 3- почта

// В переменную message записать сообщение в зависимости
// от опции
// "Вы можете забрать товар завтра с 12.00 у нас"
// "Курьер доставит заказ завтра с 9.00 до 18.00"
// "Посылка будет доставлена сегодня"
// "Вам перезвонит мененджер"

// 1 сделать переменную
// 2 сделать switch 1 2 3

// 3 в каждом кейсе записать в message строку

// 4 сделать лог message
// const stars = 3;
// let message = '';


// switch(option){
//   case 1:
//     message = "Вы можете забрать товар завтhа";
//     break;
    
//     case 2:
//       message = 'Курьер доставит заказ завтра с 9.00 до 18.00';
//       break;

//       case 3:
//         message = 'Посылка будет доставлена сегодня';
//         break;

      
//           default:
//             console.log('Вам перезвонит мененджер');
// }
// console.log(message);


const stars = 40;
let message = '';

switch(stars){
    case 40 :
        message = 'Вам перезвонит мененджер';
        break;
        case 2 :
            message : "Курьер доставит посылку с 18 до 20 часов";
            break;
            case 3:
                message = 'Ваша посылка доставлена';
                break;

                default:
                    message = ' У вас ничего нет';
}
console.log(message);