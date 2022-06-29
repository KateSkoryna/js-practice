// let arrTwo = [
// 	"Коля",
// 	{
// 		type: "JS",
// 		age: 36
// 	},
// 	true,
// 	function () {
// 		console.log('Привет, я Коля');
// 	}
// ];

// console.log(arrTwo);
// console.log(arrTwo[0]);
// console.log(arrTwo[1].type);
// console.log(arrTwo[2]);
// arrTwo[3]();


// Длина массива. Свойство length

// let arrOne = ['Ваня', 'Иштван', 'Оля',];

// console.log(arrOne);
// console.log(arrOne.length);
// console.log(arrOne.indexOf('Ваня'))
// console.log(arrOne[2])
// console.log(arrOne.slice(1, -1))
// console.log(arrOne.splice(1, 0, 'Игорь'))
// console.log(arrOne)

// arrOne.length = 0;
// console.log(arrOne);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;


// Напомню что массив является объектом и, следовательно,
// ведёт себя как объект. Например, копируется по ссылке:

// let arr = ['Ваня', 'Иштван', 'Оля',];
// console.log(arr);

// let arrNew = arr;

// arrNew.length = 2;

// console.log(arr);

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.shift();
// console.log(arr);

// arr.unshift('Дима', 'Катя');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.push("Света");
// console.log(arr);

// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
// let arrOne = ['Ваня', 'Иштван', 'Оля',];

// let arrTwo = arrOne.slice(1, 2);
// console.log(arrTwo);

// let arrThree = arrOne.slice(-2, -1);
// console.log(arrThree);

// let arrFour = arrOne.slice();
// console.log(arrFour);

// let arr = [
// 	{ name: 'Вася', age: 36 },
// 	{ name: 'Коля', age: 18 },
// 	{ name: 'Оля', age: 'Не скажу' },
// ]

// let resultOne = arr.find(function (item, index, array) {
// 	return item.age === 36;
// });

// //let resultOne = arr.find(item => item.age === 18);
// console.log(resultOne);

// let results = arr.filter(function (item, index, array) {
// 	// если true - элемент добавляется к результату, и перебор продолжается
// 	// возвращается пустой массив в случае, если ничего не найдено
// });

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.

// let arr = [
// 	{ name: 'Вася', age: 36 },
//     { name: 'Коля', age: 18 },
//     { name: 'Витя', age: 16 },
// 	{ name: 'Оля', age: 'Не скажу' },
// ]
// let result = arr.filter(function (item, index, array) {
// 	return item.name == 'Коля';
// });
// console.log(result);

//Сортировка массивов

// let arrOne = ['Банан', 'Ваня', 'Оля'];
// console.log(arrOne.sort());

// // Сотритовка чисел
// let arrTwo = [8, 22, 1, 32, 2, 18, 4, 36];
// console.log(arrTwo.sort());

// // По умолчанию элементы сортируются как строки.
// // Для строк применяется лексикографический порядок,
// // и действительно выходит, что "8" > "22".
// console.log("5" > "22");

// let arrTwo = [8, 22, 1, 5,];
// console.log(arrTwo.sort());

// Функция сортировки

// function compareNumeric(a, b) {
// 	console.log(`Сравниваем ${a} и ${b}`);
// 	// if (a > b) return 1;
// 	// if (a == b) return 0;
// 	// if (a < b) return -1;

// 	return a - b
// }

// //console.log(arrTwo.sort((a, b) => a - b));

// console.log(arrTwo.sort(compareNumeric));

// let w = 'xfjhsufgsiugd'
// const x = w;
// const s = x + 'jfvdfjvbdhfjv'

// w = 'dddd'
// console.log(w)
// console.log(x)
// console.log(s)

// function getCommonElements(array1, array2) {
//   // Change code below this line

//    const array = [];

//    for (let number of array2) {
//   if (array1.includes(number) )
//   array.push(number)
// }

// return array;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((number) => number %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((number) => number %2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((number) => number %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((number) => number %2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((number) => number %2 === 0 );
// const eachElementInThirdIsOdd = thirdArray.every((number) => number %2 !== 0);

// console.log(eachElementInThirdIsEven)

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// console.log(totalScore)

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totaltime, { playtime, gamesPlayed }) => { return totaltime + playtime / gamesPlayed }, 0)
// console.log(totalAveragePlaytimePerGame)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// console.log(length)

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

// console.log(sortedByAuthorName)

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       const potionIndex = this.potions.indexOf(potionName);
//       console.log(potionIndex)
// this.potions.splice(potionIndex, 1)


//     // Change code above this line
//   },
// }; 

// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.potions)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// // const names = books.filter(({ rating }) => rating > MIN_BOOK_RATING)
// const names = books.filter(({rating}) => rating > MIN_BOOK_RATING).map(({author}) => author).sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => { return [...users].filter((user) => user.gender === gender ).reduce((previousValue, {balance}) => previousValue + balance, 0)
// };

// console.log(getTotalBalanceByGender(users, 'male'))

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);


//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion('Baby lemonade')

// const filter = function (array, callback) { 
//     newArray = [];
//     for (const a of array) {
//         console.log(a)
//         const condition = callback(a);
//         if (condition) {
//             newArray.push(a);
//         }
//     }
//     return newArray;
// }

// const fruits = [
//     { name: 'apple', price: 10, quantity: 230 },
//     { name: 'peach', price: 10, quantity: 10 },
//     { name: 'grape', price: 10, quantity: 100 },

// ];


// const getFruitsQuantity = function (fruit) {
//     return fruit.quantity >= 100;
// };

// const f = filter(fruits, getFruitsQuantity);

// console.log(f)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const variables = (products, propName) => { return products.filter((product) => product[propName]).map(product => product[propName]) }


//   // Change code above this line

// console.log(variables(products, 'male'))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  // Change code below this line
// const array = [];
// const entries = Object.entries(products);
//     for (let i = 0; i < entries.length; i += 1)
//     // console.log(entries[i])
//     {
//         const ent = entries[i]
// //         for (let j = 0; j < ent.length; j += 1)

// //         { 
// //               if (ent[j].includes(propName)) {
// //     array.push(ent[j])
// //         }

// //   }
// }
// return array;


//   // Change code above this line
// }

// getAllPropValues('name')

// function add(...args) {
//  console.log(args)
//   // Change code above this line
// }

// add(1, 2, 3, 4);

// function checkNumber(valueб, ...numbers) { 
//  console.log(numbers)
//   return numbers.includes(value)
// }

// console.log(checkNumber(1, 2, 3, 4, 5, 1))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       } 
      
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion)
//         return this.potions.splice(potionIndex, 1)
//       } 
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.removePotion('Dragon'))
// console.log(atTheOldToad.potions)


// function findShort(s) {
  
//   let a = { ...s, name: 'zzzzz'}
//   console.log(a)
//  return Math.min(...s.split(" ").map (s => s.length));
  
//   for (const word of str) {
//     if (word.length < shortestWord.length) {
//       shortestWord = word
//     }
//   }
//   return shortestWord;
// }

// const a = { name: "Speed potion", price: 460 };

// console.log(findShort(a))

// const bool = [true, false, '', null, 0, 2]

// const fill = bool.filter(Boolean)

// console.log(fill)

// const array = ['audi', 'bmw', 'alfa', 'citroen']

// const obj = { ...array }

// console.log(obj)


// УНИКАЛЬНЫЕ ЗНАЧЕНИЯ

// const nums = [1, 1, 2, 2, 3, 3, 4, 3, 5, 5, 6, 77, 2, 1, 5]

// const array = ['audi', 'bmw', 'alfa', 'citroen', 'citroen', 'alfa']

// let uniNums = [...new Set(nums)]
// let uniCars = [...new Set(array)]
// console.log(uniNums)
// console.log(uniCars)

// let filterCars = array.filter((c, i, a) => a.indexOf(c) === i)
// let filterNums = nums.filter((c, i, a) => a.indexOf(c) === i)
// console.log(filterCars)
// console.log(filterNums)

// let uni_cars = Array.from(new Set(array))
// let uni_nums = Array.from(new Set(nums))
// console.log(uni_cars)
// console.log(uni_nums)

// СЛУЧАЙНОЕ ЧИСЛО

// const nums = [1, 1, 2, 2, 3, 3, 4, 3, 5, 5, 6, 77, 2, 1, 5, 88, 95]

// const rundom_num = nums[(Math.floor(Math.random() * (nums.length)))]
// console.log(rundom_num)