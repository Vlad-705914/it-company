// Напиши скрипт который проверяет вхождение
// числа в отрезок обозначеный х1 и х2

// до х1
// после х2
// От х1 до х2
// До х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 50;
const res = number > x1 && number < x2;

//number > x1 && number < x2
// 50 > 10 && 50 < 30
//  true && false 
// false


//  150 < 10 || 150 > 30
// false || true
//  true
//  15 < 10 || 15 > 140
//  false || false
//  false

// console.log(`Число ${number} попадает в отрезок до ${x1}?`,number < x1);
// console.log(`Число ${number} попадает в отрезок до ${x1}?`,number > x2);
console.log(`Число ${number} попадает в отрезок до ${x1}?`);