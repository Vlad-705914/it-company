// Оператор ветвления
// if(false){
//     console.log('No');
//     // если результат в скобках false, тело if не выполняется
// }
// console.log('Yes');//Yes

// if( 5 > 30){
//     console.log('x > y');// eсли if да, то выполнится это
// } else {
//     console.log('x < y');// в противном случае это x < y
// }

// const salary =  1000;

// if(salary <= 500){
//     console.log('no');  
// } else if(salary > 500 && salary <= 1500) {
//     console.log('yes');
// } else if(salary > 500 && salary <= 300){
//     console.log('x');
// } else{
//     console.log('x');//означает в противном случае
// } 
// yes


// Оператор ветвления else(тогда)... if(если) 



// Тернарный Оператор

// const balance =  1000;
// let message;

// if(balance >= 0){
//     message = 'Позитивный баланс';
// } else{
//     message = 'Hегативный баланс';

// }

// console.log(message);
// Заменяем это на Тернарный Оператор

// const message = условие? выражение1 : выражение2;
// если условие true выполняется условие1, если false, выражение2
// const message = balance >= 0? 'Позитивный баланс': 'Hегативный баланс';

// console.log(message);//  применяется только если два варианта.


// Глобальная и блочная область видимости

// const b = 10;
// if(true){
//     console.log(b)//10
//     const a = 5;
    
//     console.log(a);//5  
// }
// console.log(a);// ошибка

