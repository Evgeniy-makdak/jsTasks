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