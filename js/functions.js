// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");


//ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ 

// // ❌ Ошибка! Не работает вызов до объявления
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

// // ✅ Работает вызов после объявления
// multiply(4, 5, 6);

// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
// const lastElement = array[array.length -1];

//  return [firstElement,lastElement];
//   // Change code above this line
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let total = 0;
//     const array = message.split(' ');

//     console.log(array)

//     for (i = 0; i < array.length; i += 1) {
//         console.log(array[i])
//         total += pricePerWord;

//     }
//     return total;

// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// Change code above this line

//    function slugify(title) {
//   // Change code below this line
//        const slug = title.toLowerCase().split(' ').join('-');



// return slug;


//   // Change code above this line
//    }

// console.log(slugify("Arrays for begginers"))


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     const newArray = firstArray.concat(secondArray);


// return newArray.length >= maxLength ? newArray.slice(0, maxLength) : newArray ;

//     // Change code above this line
// }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// function calculateTotal(number) {
//  // Change code below this line
//     let total = 0;

//     for (let i = 1; i <= number; i += 1) {
//        total += i;

//     }
//   return total;
// }

// console.log(calculateTotal(9))

// function findLongestWord(string) {
//     // Change code below this line
//     const array = string.split(' ');
//     let longesttWord = array[0];


//     for (let i = 0; i < array.length; i += 1) {

//         if (longesttWord.length < array[i].length) {
//             longesttWord = array[i];
//         }
//     }
//     return longesttWord;
// }


//   // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
// //    numbers.push(i);
//   console.log(i)
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17))

// function filterArray(numbers, value) {
//    // Change code below this line
// const array = []; 
//    for (const number of numbers) {
//       // console.log(numbers[i])
//       if (number > value) {
//          array.push(number)
//       }

//    }
//  return array;


//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4))

// function getCommonElements(array1, array2) {
//   // Change code below this line


//    const array = [];


//    for (let i = 0; i < array2.length; i += 1) {

//   if (array2.includes(array1[i]) )
//   array.push(array1[i])
// }

// return array;
//  // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))


// function includes(array, value) {
//   // Change code below this line
// let result;

// for (let i = 0; i < array.length; i += 1) {
// if (array[i] === value) {
// result = true;
// break;
// } else {
//   result = false;
// }
// }

// return result;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 6], 8))


// function simpleMultiplication(number) {

//   return number * (number % 2 ? 8 : 9);
// }

// console.log(simpleMultiplication(2))

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     for (const sheep of arrayOfSheep) {

//    if (sheep === true) {
//     count += 1;
//    }
//     }
//     return count;
// }

// console.log(countSheeps([true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ]))


// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 !== 0;
// }

// console.log(lovefunc(2, 4))

// function hero(bullets, dragons){
// return dragons * 2 <= bullets;

// }

// console.log(hero(7, 4))

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const array = message.split('-');
//     console.log(array)

//   let total = 0;

//   for ( let word of array) {
//   total += pricePerWord;
//   }

// return total;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

// function findNeedle(haystack) {

//   for ( const word of haystack) {
//     if (word === "needle") {
//       return `found the needle at position ${haystack.indexOf(word)}`
//     }
//   }
//   return false;
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


// function addSpace(arr) { 

//     for (let i = 0; i < arr.length; i += 1) { 
//        arr[i] *= 2;
//     }
// }

// const nums = ['1', '2', '3', '4']

// addSpace(arr([1, 2, 3, 4]));

// console.log(nums)

// function getCommonElements(array1, array2) {
//   // Change code below this line

//    const array = [];


//    for (let i = 0; i < array2.length; i += 1) {

//   if (!array2.includes(array1[i]) )
//   array.push(array2[i])
// }

// return array;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// function createArrayOfNumbers(min, max) {
//    const numbers = [];
//    // Change code below this line
//    for (let i = min; i <= max; i += 1) {
//       numbers.push(i);
//    }
//    // Change code above this line
//    return numbers;
// }
// console.log(createArrayOfNumbers(14, 17))


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let total = 0;
// // const array = message.split(' ');

// for (i = 0; i < message.length; i+=1) {
// total += pricePerWord;
// }

// return total;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))


// function calculateTotal(number) {
//  // Change code below this line
//    const start = 0;
//   let total = 0;

//    for (let i = start; i <= number; i += 1) {
//         console.log(i);
// total = total + i

// //   console.log(total)
// }return total
//   // Change code above this line
// }

// console.log(calculateTotal(4) )

// function noSpace(x){

//     return array = x.split(' ').join('')
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B'"));

// function sumMix(x) {
//     let total = 0;
    
//     for (let nums of x) {
//         total += Number(nums);
//     }
//     return total;
// }
// console.log(sumMix([9, 3, '7', '3'])) 

// function points(games) {
// let total = 0;

//     for (let game of games) {
    
//         if (game[0] > game[game.length - 1]) {
//             total += 3;
//         } else if (game[0] === game[game.length - 1])
//             total += 1;
//     }
//     return total;
// }

// console.log(points(['1:1','2:4','3:0','4:0','2:1','3:1','4:1','3:2','4:4','4:3']))


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//      let theSmallestNumber = args[0];

//      for (const number of args) {
//          if (theSmallestNumber > number) {
//              theSmallestNumber = number;
//          }
//      }
//      return theSmallestNumber;
//   }
//     console.log(findSmallestInt([78, 56, 232, -12, 8]))
// }

// function past(h, m, s){
//     let total = 0;

//     return total = 1000 * (h*3600 + m*60 + s);
    

// }

// console.log(past(1, 1, 1))

// function reverseWords(str) {
//     return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }

// console.log(reverseWords('apple baby'))

// function accum(s) {
//     const array = s.toLowerCase().split('');
//     let newArray = [];


//     for (i = 0; i < array.length; i += 1) {
//        newArray.push(array[i].toUpperCase() + array[i].repeat(i))
//     }
    
// return newArray.join('-')
// }

// console.log(accum("ZpglnRxqenU"))

// function accum(s) {
//   var array = [];
//   for (i = 0; i < (s.length); i++) {
//     array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
//   };
//   return array.join("-");
// }




// CALLBACK FUNCTON

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// console.log(greet)

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Ллой");

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 1; i <= n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// 1
// 2
// 3

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 1
// Logging value: 2
// Logging value: 3


// const numbers = [5, 10, 15, 20, 25];

// let total = 0;
// numbers.forEach(number => total += number)
//  console.log(total)

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number) {
//     total += number;  
// }
// );
// console.log(total)


// СТРЕЛОЧНЫЕ ФУНКЦИИ 

// const add = (a, b, c) => {
//   return a + b + c;
// };

// console.log(add(5, 10, 15))

// var f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
// console.log(f())  // 6

// const elements = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// elements.map(function(element) {
//   return element.length;
// }); // Это выражение вернёт массив [8, 6, 7, 9]

// // Функцию выше можно записать как стрелочную функцию:
// const a = elements.map((element) => element.length)

// console.log(a)

// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(arrowAdd(15, 10, 25))


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// const calculateTotalPrice = (orderedItems) => {
// let totalPrice = 0;
//     orderedItems.forEach(item =>
//     { totalPrice += item })
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// const products = [
//   { name: 'Jadgf', price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   propValues = [];
//   // Change code below this line
//  for (const product of products) {
//      if (product[propName])

//      {
//             propValues.push(product[propName]);
//     }
//   }
//   return propValues;

//   // Change code above this line
// }
// console.log(getAllPropValues("name"))

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

const buddies = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Alec Boldwin"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// console.log(getFriends(users));

// const getFriends = users => users.flatMap(user => user.friends);

// const uniqueFriends = getFriends => getFriends(buddies).filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(uniqueFriends(getFriends))

// const getUserNames = users.map(function (user) {
//     return user.name;
// } );

// console.log(getUserNames)

// const sortByAscendingBalance = users => { return [...users].sort((firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance) };

// console.log(sortByAscendingBalance(users))

// console.log(users.length)

// const getUsersWithEyeColor = (users, color) => { return users.filter(({eyeColor}) => eyeColor === color)
// };

// console.log(getUsersWithEyeColor(users,'blue'))

// const getTotalFriendCount = users => { return users.reduce((total, user) => total + user.friends.length, 0)
// };

// console.log(getTotalFriendCount(users))

// console.log(getUserNames(users))
  
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) === i)
// console.log(uniqueAges)

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totaltime, { playtime, gamesPlayed }) => totaltime + playtime / gamesPlayed, 0)

// console.log(totalAveragePlaytimePerGame)

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, playtime) => previousValue + playtime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime)

// function solution(str, ending) {
// console.log(str.length - 1)
//     return str.indexOf(ending)
   
// }


// console.log(solution('abcde', 'abc'))
// console.log(solution('abcde', 'cde'))

// function highAndLow(numbers){
   
//     numbers = numbers.split(' ')
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`
   
// }

// console.log(highAndLow("1 2 3 4 5"))

// function getMiddle(s){
   
//   let evenOdd = s.length % 2 === 0
//     let minMid = s.charAt(s.length / 2 - 1)
//     console.log(minMid)
//   let mid = s.charAt(s.length/2)
  
//   return (evenOdd == true)? minMid.concat(mid): mid
// }

// console.log(getMiddle('strong'))

// function sumArray(array) {
//     return !array || array.length == 0 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((total, number) => total + number, 0)
// }

// console.log(sumArray([6, 2, 1, 8, 10 ]))

// function changeEven(numbers, value) {
//   let array = [];
//   // Change code below this line
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       array.push(number + value)
//     } 
//       array.push(number)
  
//   })
//   return array;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// function lastValue(str, target){ 
//   return str.includes(target) && str[str.length - 1] === target[target.length - 1]
// }

// console.log(lastValue("Bastion", "ion"))
// console.log(lastValue("Bastion", "bion"))
// console.log(lastValue("Bastion", "n"))
// console.log(lastValue("Bastion", "on"))
// console.log(lastValue("Bastion", "zon"))

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const getNewPlayersTime = players.map((player) => { return ({
//     ...player,
//     playtime: player.playtime + 100, 
// })})
  
// console.log(getNewPlayersTime)

// console.log(getNewPlayersTime)

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//    order(pizzaName, onSuccess, onError) {
//  if (this.pizzas.includes(pizzaName)) {
//      return onSuccess(pizzaName)
//     }
//  return  onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
    
//    },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);

// function positiveSum(arr) {
//   return arr.filter(a => a >= 0).reduce((total, c) => total + c, 0)
// }
// console.log(positiveSum([1,2,3,4,5]))



// const map = ["_id", "name", "isActive", "balance"];
// const users = [
//   {
//     "_id": "5d220b10e8265cc978e2586b",
//     "isActive": true,
//     "balance": 2853.33,
//     "age": 20,
//     "name": "Buckner Osborne",
//     "gender": "male",
//     "company": "EMPIRICA",
//     "email": "bucknerosborne@empirica.com",
//     "phone": "+1 (850) 411-2997",
//     "registered": "2018-08-13T04:28:45 -03:00"
//   },
//   {
//     "_id": "5d220b10144ef972f6c2b332",
//     "isActive": true,
//     "balance": 1464.63,
//     "age": 38,
//     "name": "Rosalie Smith",
//     "gender": "female",
//     "company": "KATAKANA",
//     "email": "rosaliesmith@katakana.com",
//     "phone": "+1 (943) 463-2496",
//     "registered": "2016-12-09T05:15:34 -02:00"
//   },
//   {
//     "_id": "5d220b1083a0494655cdecf6",
//     "isActive": false,
//     "balance": 2823.39,
//     "age": 40,
//     "name": "Estrada Davenport",
//     "gender": "male",
//     "company": "EBIDCO",
//     "email": "estradadavenport@ebidco.com",
//     "phone": "+1 (890) 461-2088",
//     "registered": "2016-03-04T03:36:38 -02:00"
//   }
// ];


// console.log(uniqueFriends)
// const fn = (map, users) => users.map(user => {
//   const newObj = {};
//   for (let key of map) {
//     if (user[key]) {
//       newObj[key] = user[key]
//     }
//   }

//   return newObj;
// })


// console.log(getProperties)

// const fn = (keys, arr) => arr.map((el) => Object.fromEntries(Object.entries(el).filter((el) => keys.includes(el[0]))));


// console.log(fn(map, users))

// const string = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//   { char: "e", index: 11 }, { char: "a", index: 1 }, { char: " ", index: 9 }, { char: "!", index: 14 }, { char: "e", index: 7 }]

// const getPhraze = [...string].sort((a, b) => a.index - b.index).map(w => w.char).join('')

// console.log(getPhraze)

// Метод EACH
// const array = ['denis', 'max', 'steven'];
// console.log(array)

// const eachRes2 = (array) => {
//   let b = {};
//   let c = b['greet'] = [];
// array.forEach(a => {
//   c.push(`hello ${a}`)
// })
//   return b;
// }

// console.log(eachRes2(array))


// function deleteNth(arr,n){
//  const result = []
//   for (const key of arr) {
//     const exist = result.filter(item => item === key).length
//     console.log(exist)
//     if (exist && exist === n) {
//       continue
//     } else {
//       result.push(key)
//     }
//   }
//   return result
// }

// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

// function persistence(num) {
//   let result = 0;
//   let test = num;
  
//   while (String(test).split('').length > 1) {
//     test = String(test).split('').map(Number).reduce((a, b) => a * b, 1);
//     console.log(test)
//     result+=1;
//   }

//   return result;
// }

// console.log(persistence(39))

// function countSmileys(arr) {
//   const arrayFaces = [':)', ':D', ';-D', ':~)', ';~D'];
//   let total = 0;
//   for (let face of arr) {
//     if (arrayFaces.includes(face)) {
//       total += 1
//     }
//   }

//   return total;
// }

// console.log(countSmileys([':D',':~)',';~D',':)']))


// function order(words){
//   const rightOrder = words.split(' ').sort((firstWord, secondWord) => firstWord.match(/\d/) - secondWord.match(/\d/)).join(' ')
//   console.log(rightOrder)
// }

// console.log(order("is2 Thi1s T4est 3a"))


// function alphabetPosition(text) {
//   const newStr = text.toUpperCase().replace(/[^a-zа-яё]/gi, '').split('').join('')

//   let total = [];
//   for (let i = 0; i < newStr.length; i += 1) {
//     const num = newStr.charCodeAt(i) - 64;
// total.push(num)
//  }
//   return total.join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))



// function alphabetPosition(text) {
//   const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   const textSplit = text.toLowerCase().split("")
//   console.log(textSplit)
//   let num = []
//   //console.log(textSplit)
//   for (let i = 0; i < textSplit.length; i += 1) {
//     const letterIndex = alph.indexOf(textSplit[i]) + 1
//     if (letterIndex !== 0) {
//       num.push(letterIndex)
//     }
//   }
//   return num.join(' ')
// }

// console.log(alphabetPosition("The sunset sets at ,,, twelve o' clock."))
// function countPositivesSumNegatives(input) {
 
//   if (input[0] === 0 && input[input.length - 1] === 0 && input.length <= 2 ) {
//     return [];
//     }
  
 
//   const positiveArray = input.filter(number => number > 0).length

//   const negativeArray = input.filter(number => number < 0).reduce((total, number) => total + number, 0)

//   return [positiveArray, negativeArray]

// }

// console.log(countPositivesSumNegatives([]))

// function alphabetPosition(text) {
//   const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   const textSplit = text.toLowerCase().split(" ")

//    let array = [];

//   for (let i = 0; i < textSplit.length; i += 1) {
   
//     const word = textSplit[i].replace(/[^a-zа-яё]/gi, '').split('')
//     const indexLetter = word.reduce((summ, letter) => (alph.indexOf(letter) + 1) + summ, 0)
//     array.push(indexLetter)

//   }
//   const longestWord = textSplit.filter(w => array.indexOf(Math.max(...array)) === textSplit.indexOf(w))
//   return `${longestWord}`;

// }

// console.log(alphabetPosition("The word is ended soon"))

// var number = function (busStops) { 
// return busStops.filter(stop => stop[0] - stop[1])
// }
// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

// function a(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }
// console.log(a([1, -3, 4, -6, 0, 5, -8]))