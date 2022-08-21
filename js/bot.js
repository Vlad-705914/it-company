

// # 21

// function findLongestWord(string) {
//     const arrayWords = string.split(' ');
//     let biggestWord = arrayWords[0];
//     for (let i = 0; i < arrayWords.length; i += 1) {
//         if (arrayWords[i].length > biggestWord.length) {
//             biggestWord = arrayWords[i];
//         }
//     }
//     return biggestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));


// # 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for( let i = min; i <= max; i += 1){
//   numbers.push(i);
//   }
  

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

// # 23

// function filterArray(numbers, value) {
//    // Change code below this line
//  const result = [];
//   for (number of numbers) {
//   if(number > value){
//     result.push(number);
    
//   }
// }

// return result;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(([12, 24, 8, 41, 76], 38));




// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i <= order.length; i += 1){
//     total +=order[i];
//   }
    
//   return total;

//   // Change code above this line
 
// }


// console.log(calculateTotalPrice([164, 48, 291]));

    

  // Change code above this line
  // return total;


// function findLongestWord(string) {
//   // Change code below this line
// let longesWord = [0];
//   let newString = string.split(' ');
//   for (number of newString) {
//     if (number > longesWord ) {
//       longesWord = number;

//    }
    
//  }
// return longesWord;
//   // Change code above this line
// }
// console.log(findLongestWord("Google do a roll"));

// # 23

// function filterArray(numbers, value) {
//    // Change code below this line
// let number = [];
//   for(let i = 0; i < numbers.length; i +=1){
//     if (numbers[i] > value){
//      number.push(numbers[i]);  
//       }  
//   }
// return  number;

//   // Change code above this line
// }

//   // Change code above this line

//   console.log(filterArray([12, 24, 8, 41, 76], 38));

// # 24

// Напиши функцию которая получает два массива произвольной длины
// array1, array2, и возвращает новый массив состоящий из элементов
// которые есть в обеих массивах




// Соединяем два массива в один

// # 25
// function getCommonElements(array1, array2) {
// let commonArray = [];
// for (const element of array1) {
//    if(array2.includes(element)){
//       commonArray.push(element);
//    }
// }
//  return commonArray;
// }
  





//  // Change code above this line


// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// # 32

// function includes(array, value) {
//   // Change code below this line
// for( let i = 0; i < array.length; i += 1){
//  if(array[i] === value){
//   return true;
// }
// }
//   return false; 
//   // Change code above this line
// }
// console.log(([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let i = 0; i < order.length; i += 1)
  
//   total += order[i];

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// # 32

// function findLongestWord(string) {
//   // Change code below this line
//   let newSring = string.split(' ');
//   let newWord;
//   for (let i = 0; i < newSring; i +=1){
//   if(newSring > string.length){
//     newWord = newSring;
//     return newWord;
//   }
//   }
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));

// # 23

// function filterArray(numbers, value) {
//    // Change code below this line
// let newArray = [];
//   for(let i =0; i < numbers.length; i += 1 ){
//     if(numbers[i] > value){
//      newArray.push(numbers[i]); 
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newArray = [];
//   for (element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }

//   }
 
//     return newArray;
//     // Change code above this line
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));