// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags.length-1;
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 13

// ========================5==========================

// const apartment = {
//    email : "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];

  // ========================6==========================

//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";

// ======================7=========================
  
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//       },
     
//   };
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = { country: "Jamaica"};
//     apartment.location= { city: "Kingston"};

// ==============================9============================


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName] : "henry.carter@aptmail.com",
//   [passwordInputName] : "jqueryismyjam",
//   };

// ====================================10 ===============================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
//

// ====================================10 ===============================
 
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// ====================================11 ===============================

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if(apartment.hasOwnProperty(key)){
   
//   keys.push(key);
//   values.push(apartment[key]); 
//   }
// }
// console.log(values);
  // ====================================12 ===============================

//   function countProps(object) {
//     let propCount = 0;
//     const values = Object.values(object); 
   
//     for(const value of values){
//       propCount = values.length  ;
//     }
  
 
//     return propCount;
//   }


// console.log(countProps({})); 
// console.log(countProps({ name: "Mango", age: 2 })); 
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 

// =================================13==================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for( const key of keys){

//   values.push(apartment[key]);
// }


// ====================================14==================================

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
  
//   const keys = Object.keys(object); 

//   for(const key of keys){
//           propCount = keys.length  ;
// }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({})); 
// console.log(countProps({ name: "Mango", age: 2 })); 
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ========================================15====================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys =Object.keys(apartment);
// const values = Object.values(apartment);

// =========================================16==========================================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   for(const value of values){
//     totalSalary += value;
//   }


//   return totalSalary;
// }

// console.log(countTotalSalary({})); 
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); 
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// =========================================17===========================================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

// }
// // hexColors.push(colors);



// console.log(hexColors);

// =========================================18===========================================
    
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {

let result = 0;
   
for(const product of products){
  console.log(product);
  if(product.name === product.price){

  }
}


  // Change code above this line
} 
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));





  
  
   
  
  
  
  

