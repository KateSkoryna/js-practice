// ОБЬЕКТЫ 

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };
// console.log(bookShelf['books'])
// bookShelf.getBooks();

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs);

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs"));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const genres = Object.create(book);
// genres.name = ["historical prose", "adventure"];

// // console.log(genres.hasOwnProperty('rating'));

// for (const key in book) {
// //  console.log(key);
// //     console.log(book[key]);
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

  // Если это не собственное свойство - ничего не делаем
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// book.author = 5

// console.log(book)

// const price = Object.create(book)
// price.name = ['Dollar', "Euro", 'Gryvnya'];
//     price.surname = "Arnaut";
//     price.date = "Thursday";

// // console.log(price)

// const keys = Object.keys(price);
// const values = Object.values(price);
// const entries = Object.entries(price)

// for (const key of keys) {
//   // Ключ
// //   console.log(key);
//   // Значение свойства
//     // console.log(values);
//     console.log(entries)
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// const bookRating = [];
// let totalRating = 0;

// for (const book of books) {
// totalRating += book.rating;
//   bookRating.push(totalRating);
// }

// const averageRating = (totalRating / books.length).toFixed(1);

// console.log(averageRating);

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {

// if (object.hasOwnProperty(key)) {
//   propCount += 1;
// }
// }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 })) 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key])
//     console.log(values)
//     console.log(key)
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }))

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(colors.rgb);
// }

// console.log(hexColors)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//       console.log(product)
//     if (product.name === productName) {
//       return product.price;
//     }
//   }


//   // Change code above this line
// }
// console.log(getProductPrice('Radar'))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//  propValues = [];
//     for (const product of products) {
//         if (product[propName]) {
//             console.log(product.price)
//             propValues.push(product[propName]);
//     }
//   }
//   return propValues;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;
    
//     for (const product of products) {
//          if (product.name === productName){
//       totalPrice = product.price * product.quantity;
//   }
// }
// return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"))

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(title); 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(yesterday)

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// console.log(forecast.today)

// function fn(...args) {
//   // В переменной args будет полноценный массив
//     console.log(args)
// }
// fn(5, 7, 12)

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   const array2 = Array.from(args);

//     for (let i = 0; i < array.length; i += 1) {
//     console.log(array)
//   if (array[i] === array2[i]) {
//     matches.push(array[i]);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 6, 2, 7))

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     removePotion(potionName) {
//     for ( let potion of this.potions) {
//         const indexPotion = this.potions.indexOf(potion);
//         if (potion.name === potionName) {
//             this.potions.splice(indexPotion, 1);
//     }
//     }
//         return `Potion ${potionName} is not in inventory!`;
//   },
// }
// console.log(atTheOldToad.removePotion("Stay alive"))
// console.log(atTheOldToad.potions)

// function isIsogram(str){
//     let oSet = new Set(str.toUpperCase()).size;
//     console.log(oSet)
//     return oSet === str.length;

// }

// console.log(isIsogram("qaeraya"))

// const apartment = {
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const lastTag4 = apartment.tags.slice();
// console.log(lastTag4);

// const lastTag5 = apartment.tags.slice(-1);
// console.log(lastTag5);

// function validatePIN(pin) {
// return /^([0-9]{4}|[0-9]{6})$/.test(pin)
// }

// console.log(validatePIN('222222'))

// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a, b)

// const atTheOldToad = {
//    potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for ( const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
//     return this.potions.push(newPotion);
//   },
//       removePotion(potionName) {
//     for ( let potion of this.potions) {
//         const indexPotion = this.potions.indexOf(potion);
//         if (potion.name === potionName) {
//             this.potions.splice(indexPotion, 1);
//     }
//     }
//         return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for ( let potion of this.potions) {
// if (potion.name === oldName) {
//   potion.name = newName;
// }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title : firstTitle, author, isPublic, rating, coverImage } = book;
// console.log(firstTitle);




// const obj = {
//   name: 'bobby',
//   sayName() {
//     console.log(`Hallo ${this.name}`)
//   }
// }

// function myBind(object, callback) {
//   return function n() {
//    callback.call(object)
//   }
// }
// // myBind(obj, obj.sayName)
// const fn = myBind(obj, obj.sayName)
// fn(); // Hallo bobby
