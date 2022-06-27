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

// if (0) {
// 	console.log('Ложь!');
// } else if (" ") {
// 	console.log('Истина!');
// }

// if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {

// 	console.log('zzzz');

// }


