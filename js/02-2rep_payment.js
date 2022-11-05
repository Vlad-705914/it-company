const cart = [54, 28, 105, 70, 92, 17, 120];
// сделать переменную total до цикла
let total = 0 ;



// //перебрать массив

// // for(let i = 0; i < cart.length; i += 1){
// //    console.log(cart[i]); 

// //    total += cart[i];
// // }
// // console.log(total);//486

// // на каждой итерации приплюсовать к total

// for(const value of cart){
//    total += value;
// }
// console.log(total);

// // Добавить такс, 10%
// for (let i = 0; i < cart.length; i += 1){
// cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);


for(let i = 0; i < cart.length; i += 1){
   cart[i] = Math.round(cart[i] *  1.1);
}
console.log(cart);
