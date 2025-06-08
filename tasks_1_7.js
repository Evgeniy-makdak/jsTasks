console.log("Уровень 1.7 задачника code.me");
console.log("1.7.1: Дана строка: 'abcde'. Получите массив букв этой строки.");
const symbolString = "abcde";
const arrayFromSymbolString = symbolString.split('');
console.log("Массив строки 'abcde' получаем через метод split :")
console.log(arrayFromSymbolString)
console.log("1.7.2: Дано некоторое число: 12345. Получите массив цифр этого числа.");
const numbers = 12345;
const numbersArray = numbers.toString().split('');
console.log(`Массив цифр числа ${numbers}: `);
console.log(numbersArray)
console.log("1.7.3: Дано некоторое число: 12345. Переверните его - 54321.");
const reverseNumbers = numbers.toString().split('').reverse().join('');
console.log(`Перевёрнутое число ${numbers}: `);
console.log(reverseNumbers);
console.log("1.7.4: Дано некоторое число: 12345. Найдите сумму цифр этого числа.");
const summerNumbers = numbers.toString().split('').reduce((a, b) => +a + +b);
console.log(`Сумма цифр числа ${numbers}: ${summerNumbers}`);
