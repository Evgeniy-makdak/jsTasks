console.log("Уровень 1.2 задачника code.me");
// Дано число. Выведите в консоль первую цифру этого числа.
const NumberForFirstDigit = 371875;
console.log(
  `Первая цифра числа ${NumberForFirstDigit}: ${Number(
    String(NumberForFirstDigit)[0]
  )}`
);
console.log(
  `Первая цифра числа ${NumberForFirstDigit}: ${+[
    ...`${NumberForFirstDigit}`,
  ][0]}`
);
// Дано число. Выведите в консоль последнюю цифру этого числа.
const NumberForLastDigit = 371875;
console.log(
  `Последняя цифра числа ${NumberForLastDigit}: ${Number(
    String(NumberForLastDigit)[NumberForLastDigit.toString().length - 1]
  )}`
);
console.log(
  `Последняя цифра числа ${NumberForLastDigit}: ${+[
    ...`${NumberForLastDigit}`,
  ][NumberForLastDigit.toString().length - 1]}`
);
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const NumberToSumm = 77523;
console.log(
  `Сумма первой и последней цифры числа ${NumberToSumm} равна ${(summDigits =
    +[...`${NumberToSumm}`][0] +
    +[...`${NumberToSumm}`][NumberToSumm.toString().length - 1])}`
);
// Дано число. Выведите количество цифр в этом числе.
const LengthOfNumber = 513280;
console.log(
  `Количество цифр в числе ${LengthOfNumber} равно ${
    LengthOfNumber.toString().length
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
