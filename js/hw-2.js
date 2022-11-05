// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

//   console.log(checkAge(15));
//   console.log(checkAge(20));

// ================2====================
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
  
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return  "Access denied, wrong password!";
    
//   }

//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword("jqueryismyjam"));

  // ================3====================
  // function checkStorage(available, ordered) {
 
 

  //   if (ordered === 0) {
  //     return "Your order is empty!";
  //   }  if (ordered > available) {
  //     return "Your order is too large, not enough goods in stock!";
  //   }
         
    
     
  //   return "The order is accepted, our manager will contact you"; 
  // }
 

  //   console.log(checkStorage(100, 50));
  // console.log(checkStorage(100, 130));
  // console.log(checkStorage(70, 0));
  // console.log(checkStorage(200, 20));

  // ================5====================
//   const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// ================6====================
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);//['apple', 'peach', 'pear', 'banana']

// ================7====================

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);// 4

// ================8====================
// const fruits = ["apple", "peach", "pear", "banana"];
 
//  const lastElementIndex = fruits.length - 1;//3
//  const lastElement = fruits[lastElementIndex];//banana



// console.log(lastElementIndex);
// console.log(lastElement);

// ================9====================
// function getExtremeElements(array) {
//  let newArray = [];
// let array1 = array[0]; 
// let array2 = array[array.length - 1];


//  newArray = [array1].concat([array2]); 
// //  console.log(newArray);
// return newArray ;

 
// }


// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// ================10====================

// function splitMessage(message, delimiter) {
//   let words;

// words = message.split(delimiter);
  
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));

// ================11====================

// function calculateEngravingPrice(message, pricePerWord) {
 
// const newString = message.split(' ');
// console.log(newString);
// const stringLength = newString.length;
//  const result = stringLength * pricePerWord;
//  return result;


 
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// ================12===================
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter); 


//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));

// ================13===================
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(' ').join('-');


//   return slug;

// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log();
// console.log();
// console.log();

// ================15===================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// // const lastThreeEls = fruits.slice(2,5) ;
// const lastThreeEls = fruits.slice(2,fruits.length) ;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ================16===================

// function makeArray(firstArray, secondArray, maxLength) {

// const toConcatArray = firstArray.concat(secondArray);

// const newArray = toConcatArray.slice(0, maxLength);

// return newArray;

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// ================18===================

// function calculateTotal(number) {
 
//    let sum = 0;
//  for(let i = 0; i <= number; i += 1){
//    sum += i;
//  }
// return sum;

//   }
//   console.log(calculateTotal(3));
// console.log(calculateTotal(79));
// console.log(calculateTotal(57));

// ================19===================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ================20===================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for( let i = 0; i < order.length ; i += 1 )
// total += order[i];
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ================21===================
// function findLongestWord(string) {
// let stringSplit = string.split(' ');

// let longestWord = 0;

// for(let i = 0; i < stringSplit.length; i += 1 ){
//   if(stringSplit[i].length > longestWord){  
// console.log(stringSplit[i].length);
//     longestWord = stringSplit[i].length ;
//   }
//    }
//    return longestWord;
//  }


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));


// =====================21=================== Метод reduce

// function findLongestWord(string) {
//   let stringSplit = string.split(' ');
//   let longestWord = stringSplit.reduce(function(longest, currentWord) {
//     if(currentWord.length > longest.length)
//        return currentWord;
//     else
//       return longest;
    
      
//   }, "");
//   return longestWord;
// }
    
    
//     console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//     console.log(findLongestWord("Google do a roll"));
  
// =====================22===================
  
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

// for(let i = min; i <= max; i += 1){
//    numbers.push(i);
// }
  
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
//     console.log(createArrayOfNumbers(14, 17));
  
    // =====================23=================== 
    
  //   function filterArray(numbers, value) {
      
  //     let result = [];
  //  for(let number of numbers){
  //   if(number > value){
  //     console.log(number);
  //     result.push(number);
  //    }
   
  //  }
  //  return result;
   
   
  //  }
  //  console.log(filterArray([1, 2, 3, 4, 5], 3));
  //   console.log(filterArray([1, 2, 3, 4, 5], 4));

   // =====================23=================== 

  //  function checkFruit(fruit) {
  //   const fruits = ["apple", "plum", "pear", "orange"];
  
  //   return fruits.includes(fruit); // Change this line
  // }

  //   console.log(checkFruit("plum"));
  //   console.log(checkFruit("mandarin"));

      // =====================24=================== 

      // function getCommonElements(array1, array2) {
      //   let commonArray = [];
      //   for (const element of array1) {
      //      if(array2.includes(element)){
      //         commonArray.push(element);
      //      }
      //   }
      //    return commonArray;
      //   }


     

      // console.log(getCommonElements([1, 2, 3], [2, 4]));
      //   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
 
        // =====================26=================== 

        // function calculateTotalPrice(order) {
        //   let total = 0;
        //   // Change code below this line
        
        //   for (let element of order) {
        //     total += element;
        //   }
        
        //   // Change code above this line
        //   return total;
        // }
        // console.log(calculateTotalPrice([12, 85, 37, 4]));
        // console.log(calculateTotalPrice([164, 48, 291]));
        
// =====================27=================== 

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let element of numbers) {
//     const number = element;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// =====================27=================== 

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let commonNumber = [];
// for(let i = start; i <= end; i += 1){
  
//   if(i % 2 === 0){
//     commonNumber.push(i) ;
//   }
  
// }
// return commonNumber;
// }  



//    // Change code above this line


//  console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(3, 11));

// =====================31=================== 

// function findNumber(start, end, divisor) {
//   // Change code below this line
  

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i; 
      
//     }
//   }


//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// let i = 0; i < array.length; i += 1
// =====================32=================== 

// function includes(array, value) {
// for(let element of array ){
//  if(array[element] === value ){
  
//     return true;
//   }
// }
// return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}



