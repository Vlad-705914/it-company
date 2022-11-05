// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity  ;
//     // Change code below this line
//   if( totalPrice > customerCredits ){
//    message = "Insufficient funds!"; 
//   }else{
//    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }  // Change code above this line
//     return message;
//   }
//   console.log(makeTransaction(3000, 5, 23000));
//   console.log(makeTransaction(1000, 3, 15000));
//   console.log(makeTransaction(5000, 10, 8000));
//   console.log(makeTransaction(500, 10, 5000));

//   ====================20==================


// function checkStorage(available, ordered) {
//     let message  ;
//     // Change code below this line
//   if(ordered === 0 ){
//      message = "There are no products in the order!";
//   }else if(ordered > available){
//     message = "Your order is too large, there are not enough items in stock!"; 
//   }else{
//    message =  "The order is accepted, our manager will contact you";
//   }
//     // Change code above this line
//     return message;
//   }

// =======================21============================

// function isNumberInRange(start, end, number) {
//     const isInRange = number > start && number < end ? true : false;
  
//     return isInRange;
//   }

//   console.log(isNumberInRange(10, 30, 17));
//     console.log(isNumberInRange(10, 30, 5));
//     console.log(isNumberInRange(20, 50, 24));

//     ================23======================

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange ; // Change this line
  
//     return isNotInRange;
//   }

//   console.log(isNumberNotInRange(10, 30, 17));// false
//       console.log(isNumberNotInRange(10, 30, 5));//true
//       console.log(isNumberNotInRange(20, 50, 24));// false
   
// ======================24=============================

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if(totalSpent >= 50000){
//       discount = GOLD_DISCOUNT;
//     }else if(totalSpent >= 20000 && totalSpent <= 50000){
//       discount = SILVER_DISCOUNT;
//     }else if(totalSpent >= 5000 &&  totalSpent <= 20000 ){
//       discount = BRONZE_DISCOUNT;
//     }else if (totalSpent < 5000){
//       discount = BASE_DISCOUNT;
//     }
      
  
//     // Change code above this line
//     return discount;
//   }

//   console.log(getDiscount(137000));
//     console.log(getDiscount(46900));
//     console.log(getDiscount(8250));
//     console.log(getDiscount(1300));

// ======================25=============================

// function checkStorage(available, ordered) {
//     let message ; 
   
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"; 
  
//    return message;
//   }

//   console.log(checkStorage(100, 50));

  
// ======================26=============================
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = password === "jqueryismyjam" ? "Access is allowed":
//    "Access denied, wrong password!"; 
//     // Change code above this line
//     return message;
//   }
//   console.log(checkPassword("angul4r1sl1f3"));
//   console.log(checkPassword("jqueryismyjam"));

  // ======================27=============================

//   function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//      case "starter" :// Change this line
//         price = 0; // Change this line
//         break;
  
//      case "professional" : // Change this line
//         price = 20; // Change this line
//         break;
  
//       case   "organization":  // Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }

//   console.log(getSubscriptionPrice("professional"));
//     console.log(getSubscriptionPrice("organization"));

    // ======================28=============================
//     function checkPassword(password) {
//         const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
   
//     switch(password){
//       case null :
//        message = "Canceled by user!"; 
//         break;
//        case ADMIN_PASSWORD :
//         message = "Welcome!";
//         break;
  
//         default :
//          message = "Access denied, wrong password!";
        
//     }
// }

//     console.log(checkPassword("mangohackzor"));
//     console.log(checkPassword(null));
//     console.log(checkPassword("polyhax"));
//     console.log(checkPassword("jqueryismyjam"));

    // ======================29=============================

    // function getShippingCost(country) {
    //     let message;
      
    //   switch(country){
    //     case 'China':
    //      message = `Shipping to ${'China'} will cost ${100} credits`;
    //       break;
    //     case 'Chile' :
    //      message = `Shipping to ${'Chile'} will cost ${250} credits`;
    //       break;
    //     case 'Australia':
    //       message = `Shipping to ${'Australia'} will cost ${170} credits`;
    //       break;
    //     case 'Jamaica':
    //       message = `Shipping to ${'Jamaica'} will cost ${120} credits`;
    //       break;
    //       default:
        
    //       message ="Sorry, there is no delivery to your country"; 
       
    //   }
        
    //     // Change code above this line
    //     return message;
    //   }
      
    //   console.log(getShippingCost("Australia"));
    // console.log(getShippingCost("Germany"));
    // console.log(getShippingCost("China"));
    // console.log(getShippingCost("Chile"));

    // ======================30=============================
    // function getNameLength(name) {
    //     const message = `Name ${name} is ${name.length} characters long`; // Change this line
      
    //     return message;
    //   }
    //    console.log(getNameLength("Poly"));
    // console.log(getNameLength("Harambe"));

    // ======================31=============================

//     const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;//21
// const firstElement = courseTopic[0];// f
// const lastElement = courseTopic[courseTopic.length - 1];//c

// ======================32=============================

// function getSubstring(string, length) {
//     const substring = string.slice(0,[length] ) ; // Change this line
  
//     return substring;
//   }

//   console.log(getSubstring("Hello world", 3));
//   console.log(getSubstring("Hello world", 6));
//   console.log(getSubstring("Hello world", 8));

  // ======================33=============================
//   function formatMessage(message, maxLength) {
//     let result;

//    if(message.length === maxLength){
//     result = message.slice(0,message.length);
//    }else if(message.length > maxLength){
//     let messag1 = message.slice(0, maxLength) ;
//     let message2 = '...';
//     result = messag1.concat(message2);
//    }
   
   
//      return result;
//   }

//   console.log(formatMessage("Curabitur ligula sapien", 16));
//     console.log(formatMessage("Curabitur ligula sapien", 23));
//     console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//     console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

    // ======================34=============================

    // function normalizeInput(input) {
    //     const normalizedInput = input.toLowerCase() ; // Change this line
      
    //     return normalizedInput;
    //   }

    //   console.log(normalizeInput("Hello world"));
    // console.log(normalizeInput("This ISN'T SpaM"));
  // ======================35=============================

    // function checkForName(fullName, name) {
    //     const result = fullName.includes(name) ; // Change this line
    //      return result;
    //    }

    //    console.log(checkForName("Egor Kolbasov", "Egor"));
    //    console.log(checkForName("Egor Kolbasov", "egor"));

     // ======================36=============================

    // function checkForSpam(message) {
    //     let result;
      
    //     result = message.toLowerCase().includes('spam')  || message.toLowerCase().includes('sale') 
    //     ? true : false;
      
     
    //     return result;
    //   }

    //   console.log(checkForSpam("JavaScript weekly newsletter"));
    //      console.log(checkForSpam("Get best sale offers now!"));
    //      console.log(checkForSpam("Amazing SalE, only tonight!"));


   
       
