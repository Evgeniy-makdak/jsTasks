console.log("Уровень 1.5 задачника code.me");
// Найдите сумму всех целых чисел от 1 до 100.
let SumFromOneToHundred = 0;
for (let i = 1; i <= 100; i++) {
  SumFromOneToHundred += i;
}
console.log(`Сумма целых чисел от 1 до 100: ${SumFromOneToHundred}`);
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let SumOfEvenNumbersFromOneToHundred = 0;
for (let i = 0; i <= 100; i += 2) {
  SumOfEvenNumbersFromOneToHundred += i;
}
console.log(
  `Сумма целых чётных чисел от 1 до 100: ${SumOfEvenNumbersFromOneToHundred}`
);
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let SumOfOddNumbersFromOneToHundred = 0;
for (let i = 1; i <= 100; i += 2) {
  SumOfOddNumbersFromOneToHundred += i;
}
console.log(
  `Сумма целых нечётных чисел от 1 до 100: ${SumOfOddNumbersFromOneToHundred}`
);
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
const divident = 73;
const divisor = 37;
const remainderOfDivision = divident % divisor;
console.log(`Остаток от деления числа ${divident} на ${divisor} составляет ${remainderOfDivision}`);
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const slowString = 'обычная строка';
console.log(slowString.split('').reverse().join(''));
