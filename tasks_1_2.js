console.log("Уровень 1.2 задачника code.me");
// Дано число. Выведите в консоль первую цифру этого числа.
const isNumberForFirstDigit = 371875;
console.log(
  `Первая цифра числа ${isNumberForFirstDigit}: ${Number(
    String(isNumberForFirstDigit)[0]
  )}`
);
console.log(
  `Первая цифра числа ${isNumberForFirstDigit}: ${+[
    ...`${isNumberForFirstDigit}`,
  ][0]}`
);
// Дано число. Выведите в консоль последнюю цифру этого числа.
const isNumberForLastDigit = 371875;
console.log(
  `Последняя цифра числа ${isNumberForLastDigit}: ${Number(
    String(isNumberForLastDigit)[isNumberForLastDigit.toString().length - 1]
  )}`
);
console.log(
  `Последняя цифра числа ${isNumberForLastDigit}: ${+[
    ...`${isNumberForLastDigit}`,
  ][isNumberForLastDigit.toString().length - 1]}`
);
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const isNumberToSumm = 77523;
console.log(
  `Сумма первой и последней цифры числа ${isNumberToSumm} равна ${(summDigits =
    +[...`${isNumberToSumm}`][0] +
    +[...`${isNumberToSumm}`][isNumberToSumm.toString().length - 1])}`
);
// Дано число. Выведите количество цифр в этом числе.
const isLengthOfNumber = 513280;
console.log(
  `Количество цифр в числе ${isLengthOfNumber} равно ${
    isLengthOfNumber.toString().length
  }`
);
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const firstNumber = -878;
const secondNumber = 8987341;
const absFirstNumber = Math.abs(firstNumber);
const absSecondNumber = Math.abs(secondNumber);
[...`${absFirstNumber}`][0] === [...`${absSecondNumber}`][0]
  ? console.log(`Первые цифры чисел ${firstNumber} и ${secondNumber} совпадают`)
  : console.log(
      `Первые цифры чисел ${firstNumber} и ${secondNumber} не совпадают`
    );
