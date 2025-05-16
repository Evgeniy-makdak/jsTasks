const tasks = [
  // Уровень 1.1
  {
    id: 1.1,
    description: "Определение, является ли число отрицательным или положительным",
    reason: "Используем сравнение с нулём через тернарный оператор",
    solve: `const isNegativeNumber = -7;
isNegativeNumber <= 0
  ? console.log("Число отрицательное либо нулевое")
  : console.log("Число положительное");`
  },
  {
    id: 1.2,
    description: "Определение длины строки",
    reason: "Используем свойство length для получения длины строки",
    solve: `const lengthString = "I'm string";
console.log(\`Длина строки \${lengthString}: \${lengthString.length}\`);`
  },
  {
    id: 1.3,
    description: "Получение последнего символа строки",
    reason: "Обращаемся к последнему символу через индекс (длина строки минус 1)",
    solve: `const lastSymbol = "bla-bla";
console.log(
  \`Последний символ строки \${lastSymbol} - \${lastSymbol[lastSymbol.length - 1]}\`
);`
  },
  {
    id: 1.4,
    description: "Проверка числа на чётность",
    reason: "Используем оператор % для проверки остатка от деления на 2",
    solve: `const evenNumber = 7;
evenNumber % 2 === 0
  ? console.log(\`число \${evenNumber} чётное\`)
  : console.log(\`число \${evenNumber} нечётное\`);`
  },
  {
    id: 1.5,
    description: "Сравнение последних букв двух слов",
    reason: "Сравниваем символы по индексу (длина строки минус 1)",
    solve: `const firstWord = "Alpha";
const secondWord = "Omega";
firstWord[firstWord.length - 1] === secondWord[secondWord.length - 1]
  ? console.log(\`последние буквы слов \${firstWord} и \${secondWord} идентичны\`)
  : console.log(\`последние буквы слов \${firstWord} и \${secondWord} отличаются\`);`
  },
  {
    id: 1.6,
    description: "Получение последней буквы слова (с учётом мягкого знака)",
    reason: "Проверяем последний символ и возвращаем либо его, либо предпоследний",
    solve: `const isLastLetter = "бутылка";
isLastLetter[isLastLetter.length - 1] !== "ь"
  ? console.log(
      \`последняя буква в слове \${isLastLetter}: \${
        isLastLetter[isLastLetter.length - 1]
      }\`
    )
  : console.log(
      \`предпоследняя буква в слове \${isLastLetter}: \${
        isLastLetter[isLastLetter.length - 2]
      }\`
    );`
  },

  // Уровень 1.2
  {
    id: 2.1,
    description: "Получение первой цифры числа",
    reason: "Преобразуем число в строку и берём первый символ",
    solve: `const isNumberForFirstDigit = 371875;
console.log(
  \`Первая цифра числа \${isNumberForFirstDigit}: \${Number(
    String(isNumberForFirstDigit)[0]
  )}\`
);`
  },
  {
    id: 2.2,
    description: "Альтернативный способ получить первую цифру числа",
    reason: "Используем spread оператор для преобразования числа в массив цифр",
    solve: `const isNumberForFirstDigit = 371875;
console.log(
  \`Первая цифра числа \${isNumberForFirstDigit}: \${+[
    ...\`\${isNumberForFirstDigit}\`,
  ][0]}\`
);`
  },
  {
    id: 2.3,
    description: "Получение последней цифры числа",
    reason: "Преобразуем число в строку и берём символ по индексу (длина - 1)",
    solve: `const isNumberForLastDigit = 371875;
console.log(
  \`Последняя цифра числа \${isNumberForLastDigit}: \${Number(
    String(isNumberForLastDigit)[isNumberForLastDigit.toString().length - 1]
  )}\`
);`
  },
  {
    id: 2.4,
    description: "Альтернативный способ получить последнюю цифру числа",
    reason: "Используем spread оператор и получаем последний элемент массива",
    solve: `const isNumberForLastDigit = 371875;
console.log(
  \`Последняя цифра числа \${isNumberForLastDigit}: \${+[
    ...\`\${isNumberForLastDigit}\`,
  ][isNumberForLastDigit.toString().length - 1]}\`
);`
  },
  {
    id: 2.5,
    description: "Вычисление суммы первой и последней цифры числа",
    reason: "Получаем обе цифры через spread оператор и складываем их",
    solve: `const isNumberToSumm = 77523;
console.log(
  \`Сумма первой и последней цифры числа \${isNumberToSumm} равна \${(summDigits =
    +[...\`\${isNumberToSumm}\`][0] +
    +[...\`\${isNumberToSumm}\`][isNumberToSumm.toString().length - 1])}\`
);`
  },
  {
    id: 2.6,
    description: "Определение количества цифр в числе",
    reason: "Преобразуем число в строку и используем свойство length",
    solve: `const isLengthOfNumber = 513280;
console.log(
  \`Количество цифр в числе \${isLengthOfNumber} равно \${
    isLengthOfNumber.toString().length
  }\`
);`
  },
  {
    id: 2.7,
    description: "Сравнение первых цифр двух чисел (с учётом отрицательных чисел)",
    reason: "Берём модуль чисел и сравниваем первые цифры через spread оператор",
    solve: `const firstNumber = -878;
const secondNumber = 8987341;
const absFirstNumber = Math.abs(firstNumber);
const absSecondNumber = Math.abs(secondNumber);
[...\`\${absFirstNumber}\`][0] === [...\`\${absSecondNumber}\`][0]
  ? console.log(\`Первые цифры чисел \${firstNumber} и \${secondNumber} совпадают\`)
  : console.log(
      \`Первые цифры чисел \${firstNumber} и \${secondNumber} не совпадают\`
    );`
  }
];

export default tasks;