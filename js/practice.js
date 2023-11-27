/**
 * Example 7 - Операторы сравнения и приведение типов
 * Каким будет результат выражений?
 */

// console.log(5 > 4);

// console.log(10 >= '7');
// console.log(10 >= '12');
// console.log('2' > '12');
// console.log('2' < '12');

// const a = '5794aj';

// console.log(a.charCodeAt(5))

// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// const a = 'Papaya'
// console.log(a.charCodeAt(0))
// console.log('Papaya' === 'papaya');
// console.log(undefined == null); 
// console.log(undefined === null);


/**
 * Example 8 - Логические операторы
 * Каким будет результат выражений?
 */

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(0 || '' || false);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0); 
// console.log(0 == null);
// (2 && 3) => 3
// console.log(null || (2 && 3) || 4);

/**
 * Example 9 - Значение по умолчанию и оператор нулевого слияния
 * Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue,
 * если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue.
 * Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
 * Используй оператор ?? (nullish coalescing operator).
 */

//  const incomingValue = undefined;
//  const defaultValue = 8;
//  const value = incomingValue || defaultValue;
//  console.log(value);

// console.log("Mango" && null)

// let a = 'ManGo'
// a = a.toLowerCase()

// console.log(a)

// const str = 'Hallo world';
// let result = '';

// for (i = 0; i < str.length; i += 1) { 
//     result += str[i].charCodeAt()
// }

// console.log(result);




/**
 * Example 10 - Опертор % и методы строк
 * Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
 *
 * 70 покажет 01:10
 * 450 покажет 07:30
 * 1441 покажет 24:01
 */

// const totalMinutes = 765;
// const m = totalMinutes % 60;
// const h = (totalMinutes - m) / 60;
// const time = (h < 10? '0' :'') + h +':' + (m < 10? '0' :'') + m;
// console.log(time);

// ==================
// Додаткові завдання
// ==================

/**
 * Example 10 - Ввод пользователя и ветвления
 * Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
 *
 * Если посетитель вводит "Админ", то prompt запрашивает пароль
 * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
 * В противном случае вывести строку "Я вас не знаю"
 * Пароль проверять так:
 *
 * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
 * Иначе выводить строку "Неверный пароль"
 */

// let answer = prompt('Який пароль, бро?')

// switch (answer) {
//     case 'Адмін':
//         answer = prompt('Дай пароль');
//         switch (answer) { 
//             case 'Я - Адмін':
//                 console.log('Добрий день!')
//             break;
//             default: console.log('Невірний пароль');
//         }
//         break;
//     case "":
//     case null:
//         console.log('Охріна відміна');
//         break;
//     default:
//         console.log('Я тебе не знаю, бро');
// }


/**
 * Example 11
 * На основе строки "JavaScript is a pretty good language"
 * Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. 
 * Использовать цикл for.
 */

// const str = 'JavaScript is a pretty good language';
// const arr = str.split(" ");


// for (let i = 0; i < arr.length; i += 1) {

//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// const str2 = arr.join(' ');
// console.log(str2);

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const scores = [1, 2, 3, 4, 5];

// const score = scores.slice(1)

// console.log(score);

/**
 * Example 12
 * Порахувати кількість рядків в змінній text. Використовуючи цикл while.
 */



// const text = `Думи мої, думи мої,
// Лихо мені з вами!
// Нащо стали на папері
// Сумними рядами?..
// Чом вас вітер не розвіяв
// В степу, як пилину?
// Чом вас лихо не приспало,
// Як свою дитину?...`;
// console.log(text)

// const strings = text.split('\n')

// let total = strings.length;

// console.log(total)


// let total = 0;

// while (text.includes('\n')) {
// total += 1;
// }

// console.log(total)

// var tags = "Лето, зима, осень 2009 года"
// 2
// var re = /\s*,\s*/
// 3
// var tagList = tags.split(re);

// console.log(tagList)

// function abbrevName(name){

//     const array = name.toUpperCase().split(' ');

//   const arrayName = array[0];
//   const arraySurname = array[array.length - 1];
//   const nameFirstLetter = arrayName[0];
//   const surnameFirstLetter = arraySurname[0];
//   return `${nameFirstLetter}.${surnameFirstLetter } `

// }

// console.log(abbrevName('VdCBrrTRHR ZnJF'))

// function maps(x){
// const array = [];
//     for (const number of x) {
//         array.push(number * 2);
//   }
//   return array;
// }

// console.log(maps([1, 2, 3]))


/**
 * Example 13
 * Перевірте, чи має рядок однакову кількість символів «x» і «o». 
 * В змінну res ви маєте записати логічне значення true або false. 
 * Рядок може містити будь-який символ. І бути нечутливим до регістру
 * Протестувати на наступних рядках: xo, xxOo, xxxm, Oo, ooom
 * Використовувати цикл for
 */
// function checkStr(string) {
  
//   const newStr = string.toLowerCase()
//   let numberX = 0;
//   let numberO = 0;
  
//   for (let i = 0; i < newStr.length; i += 1){
//     if (newStr[i] === 'x') {
//       numberX += 1;
//     } else if (newStr[i] === 'o') {
//       numberO += 1;
//     }
//   }
  
//   return numberO === numberX;
// }

// console.log(checkStr('xoxoox'))


// let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
// console.log(resultOne);

// let resultOne = 2 - 1 * 5;
// console.log(resultOne);

// let resultTwo = (2 - 1) * 5;
// console.log(resultTwo);

// console.log('35' + - "22");

// console.log('35' * "22");

// // console.log('558' > 22++);

// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);

// console.log(!false && 11 || 18 && !'');


// if (1 === "1") {
// 	console.log('Истина!');
// } else {
// 	console.log('Ложь!');
// }

// if (5 == "5") {
// 	console.log('Истина!');
// } else {
// 	console.log('Ложь!');
// }

// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message);

// function oddEvenNumber(num) {
//     const arr = String(num).split('');
//     return arr.reduce((acc, num) => Number(num) % 2 === 0 ? acc = { ...acc, odd: acc.odd += 1 } :{ ...acc, even: acc.even+=1 }
//     , {odd: 0, even: 0});
// }

// console.log(oddEvenNumber(1235))

// function changeWordsOrder(string) {
//     return string.split(" ").sort((firstWord, secondWord) => firstWord.length - secondWord.length);
// }

// console.log(changeWordsOrder("Hello World my dear friends"))

// function getModifiedArray(array) {

//     return ['Start', ...array.slice(1, -1), "End"];
// }

// console.log(getModifiedArray([6, 5, 4, 5]))

// const filterNums = (arr, num = 0, param = 'greater') => {
//     return arr.filter(el => param === 'greater' ? el > num : el < num);
// };

// console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater'));

// const maxInterv = (...array) => {
//     return array.length === 1 ? 0 : Math.max(...array.map((num, index, arr) => Math.abs(arr[(index + 1)] - arr[index])).filter(el => !isNaN(el)))
// }
// const maxInterv = (...array) => {
//     return Math.max(...array.map((num, index, arr) =>
//         arr.length === 1 || index === arr.length - 1 ? 0 : arr[(index + 1)] - arr[index]).map(el => Math.abs(el)))
// }

// console.log(maxInterv(1, 5))

// const sumOfLen = (...array) => {
//     return array.reduce((acc, curr) => acc + curr.length, 0);
// }

// console.log(sumOfLen('hallo', 'hi'))


// const salary = ['100', '200']
// salary.unshift("1000", "1350")

// console.log(salary)

// function combineArray(arr1, arr2) {
//     return [...arr1, ...arr2].filter(el => typeof(el) === "number");
// }

// console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));

// function longestLogin(loginList) {
//     return loginList.reduce((acc, curr) =>
//         acc.length > curr.length ? acc : curr, '')
// }

// console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]))

// function factorial(n) {
//     let f = 1;
//     for (let i = 1; i <= n; i+= 1) {
//         f *= i;
//     }
//     return f;
// }

// function processArray(arr, factorial) {
//     return arr.map(num => factorial(num));
// }

// console.log(processArray([1, 2, 3, 4, 5], factorial));

// const multiplyNum = function (tech, overload) {
//   return typeof (tech) === "number" ? tech * overload : tech.map(num => num * overload);
// }

// function overloadedFunc(technique = [1, 2, 3], overload = 2, func = multiplyNum ){
//     return func(technique,overload );
// }

// console.log(overloadedFunc(10));

// const negate = function(x){ return -x; };

// const halve = function(x){ return x / 2; };

// const square = function(x){ return x * x; };

// const double = function(x){ return 2 * x; };

// const combineFunctions = (...arguments) => n => {
//     if (!arguments.length) {
//         return n;
//     }
//     return arguments.reduce((acc, fn) => fn(acc),n);
// };


// console.log(combineFunctions(x => x + x, x => x - 1, x => x !== 0)(3));

	
// let students = [{
//   name: 'Anna',
//   languages: ['English', 'Ukrainian'],
//   age: 21
// }, {
//   name: 'Bob',
//   languages: ['Polish', 'Spanish'],
//   age: 26
// }, {
//   name: 'Alice',
//   languages: ['Italian', 'Russian'],
//   age: 18
// }];

// const getLanguages = (students, ...arguments) => {
//     if (!arguments.length) {
//         return students.flatMap(({languages}) => languages);
//     }
//     return students.reduce((result, student) => {
//         if (arguments[0](student)) {
//             result.push(...student.languages);
//             return result;
//         }
//         return result;
//     },[])
// };

// console.log(getLanguages(students))

// const upperCase = string => {
//     return string.toUpperCase();
// }
// const tripleExclaim = (string) => {
//     return `${string}!!!`;
// }
// const split = (separator) => string => {
//     return string.split(separator);
// }
// const join = (separator) => string => {
//     return string.join(separator);
// }
// const copy = (string) => {
//     return `${string} ${string}`;
// }

// const createComposition = (...arguments) => value => {
//     return arguments.reduceRight((result, fn) => fn(result), value);
// }

// const result = (value) => {
//     return createComposition(copy, join(" "), split("_"), tripleExclaim, upperCase)(value);
// }

// console.log(upperCase('make_a_choice'));
// console.log(tripleExclaim(upperCase('make_a_choice')));
// console.log(split(tripleExclaim(upperCase('make_a_choice')), "_"))
// console.log(join(split(tripleExclaim(upperCase('make a choice')), " "), " "))
// console.log(copy(join(split(tripleExclaim(upperCase('make a choice')), " "), " ")))
// console.log(createComposition(copy, join, split, tripleExclaim, upperCase)('make_a_choice'))
// console.log(result("buy_ticket_now"))



// if (0) {
// 	console.log('Ложь!');
// } else if (" ") {
// 	console.log('Истина!');
// }

// if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {

// 	console.log('zzzz');

// }

// const teams = [
//   { name: "Team 1", members: ['Paul', 'T'] },
//   {name: "Team 2", members: ['Laura', 'J']}
// ]

// function* getM(members) {
//     console.log(members)
//   for (let i = 0; i < members.length; i++) {
//     yield members[i];
//   }
// }

// function* getT(teams) {
//     for (let i = 0; i < teams.length; i++) {
//       console.log(teams[i].members)
//     yield* getM(teams[i].members)
//   }
// }

// const obj = getT(teams);
// console.log(obj.next())
// console.log(obj.next())

// async function* range(start, end) {
//     for (i = start; i <= end; i++) {
//         yield Promise.resolve(i)
//     }
// }

// (async () => {
//     const gen = range(1, 3)
//     for await (const item of gen) {
//         console.log(item)
//     }
// })();

// const myP = () => Promise.resolve("I have r!")

// function firstFunc() {
//     myP().then(res => console.log(res))
//     console.log('second')
// }

// async function secondFunc() {
//     console.log(await myP());
//     console.log('second')
// }

// firstFunc();
// secondFunc();

// function* generator(i) {
//     yield i;
//     yield i * 2;
// }

// const gen = generator(10)
// console.log(gen.next().value);
// console.log(gen.next().value);

// async function f() {
//     let result = "first!"
//     let promise = new Promise((resolve, rej) => {
//         setTimeout(() => resolve('done!', 1000));
//     })

//     result = await promise;
//     console.log(result)
// }

// f();


// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success')
//         } else {
//             reject('error')
//         }
//     })
// }

// let promise = job(true)

// promise.then(function (data) {
//     console.log(data);
//     return job(false)
// }).catch(function (error) {
//     console.log(error);
//     return 'Error catch'
// }).then(function (data) {
//     console.log(data);
//     return job(true)
// }).catch(function (error) {
//     console.log(error);
//     return 'Error catch'
// })

// function getPromise(delay, message) {
//     return setTimeout(()=> Promise.resolve(message), delay)
// }

	
// getPromise(2000, "hello").then(function(data) {
//     console.log(data);
// });
// const end = Date.now() + 3000;
//   while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
//   }


function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof (x && y) === 'number') {
            resolve(x + y);
        } else {
            reject('Error!')
    }
})
};

// add(2,2).then(res => console.log(res));
// const end = Date.now() + 1000;
// while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }

	
// add(2,"a").catch(err => console.log(err));
// const end = Date.now() + 1000;
// while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }


// const accountPatients = (capacity) => {
//     let num = capacity;
//         const admit = () => {
//             if (num) {
//                 num -=1;
//                 console.log(`A patient was admitted, ${num} beds are available`)
//             } else {
//                 console.log('Can not admit a patient, no beds available')
//             }
//         }
//     const discharge = () => {
//         if (num === capacity) {
//                 console.log('There are no patients to discharge')
//             } else {
//                 num +=1;
//                 console.log(`A patient was discharged, ${num} beds are available`)
//             }
//         } 
//     return [admit, discharge];
// }

// const [admit, discharge] = accountPatients(100);
// admit();
// admit();
// admit();
// admit();
// discharge();

function checkAdult(age) {
    try {
    if (age >= 18) {
        console.log('Access allowed')
    } else if (age <= 18 && age >= 0){
        throw new Error('Access denied - you are too young!')
    } else if (!age) {
        throw new Error('Please, enter your age')
    } else if (typeof(age) !== 'number') {
        throw new Error('Please, enter number')
    } else if (age < 0) {
        throw new Error('Please, enter positive number')
    } else if (age % 1 != 0) {
        throw new Error('Please, enter Integer number')
    }
} catch (error) {
    console.log(`${(error.name)} ${(error.message)}`)
} finally {
console.log('Age verification complete')
}
    }

checkAdult(25);
checkAdult();
checkAdult(-22);
