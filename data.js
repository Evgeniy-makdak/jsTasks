const tasks = [
  // Уровень 1.1
  {
    id: 1.1,
    description:
      "Определение, является ли число отрицательным или положительным",
    reason: "Используем сравнение с нулём через тернарный оператор",
    solve: `const NegativeNumber = -7;
NegativeNumber <= 0
  ? console.log("Число отрицательное либо нулевое")
  : console.log("Число положительное");`,
  },
  {
    id: 1.2,
    description: "Определение длины строки",
    reason: "Используем свойство length для получения длины строки",
    solve: `const lengthString = "I'm string";
console.log(\`Длина строки \${lengthString}: \${lengthString.length}\`);`,
  },
  {
    id: 1.3,
    description: "Получение последнего символа строки",
    reason:
      "Обращаемся к последнему символу через индекс (длина строки минус 1)",
    solve: `const lastSymbol = "bla-bla";
console.log(
  \`Последний символ строки \${lastSymbol} - \${lastSymbol[lastSymbol.length - 1]}\`
);`,
  },
  {
    id: 1.4,
    description: "Проверка числа на чётность",
    reason: "Используем оператор % для проверки остатка от деления на 2",
    solve: `const evenNumber = 7;
evenNumber % 2 === 0
  ? console.log(\`число \${evenNumber} чётное\`)
  : console.log(\`число \${evenNumber} нечётное\`);`,
  },
  {
    id: 1.5,
    description: "Сравнение последних букв двух слов",
    reason: "Сравниваем символы по индексу (длина строки минус 1)",
    solve: `const firstWord = "Alpha";
const secondWord = "Omega";
firstWord[firstWord.length - 1] === secondWord[secondWord.length - 1]
  ? console.log(\`последние буквы слов \${firstWord} и \${secondWord} идентичны\`)
  : console.log(\`последние буквы слов \${firstWord} и \${secondWord} отличаются\`);`,
  },
  {
    id: 1.6,
    description: "Получение последней буквы слова (с учётом мягкого знака)",
    reason:
      "Проверяем последний символ и возвращаем либо его, либо предпоследний",
    solve: `const LastLetter = "бутылка";
LastLetter[LastLetter.length - 1] !== "ь"
  ? console.log(
      \`последняя буква в слове \${LastLetter}: \${
        LastLetter[LastLetter.length - 1]
      }\`
    )
  : console.log(
      \`предпоследняя буква в слове \${LastLetter}: \${
        LastLetter[LastLetter.length - 2]
      }\`
    );`,
  },

  // Уровень 1.2
  {
    id: 2.1,
    description: "Получение первой цифры числа",
    reason: "Преобразуем число в строку и берём первый символ",
    solve: `const NumberForFirstDigit = 371875;
console.log(
  \`Первая цифра числа \${NumberForFirstDigit}: \${Number(
    String(NumberForFirstDigit)[0]
  )}\`
);`,
  },
  {
    id: 2.2,
    description: "Альтернативный способ получить первую цифру числа",
    reason: "Используем spread оператор для преобразования числа в массив цифр",
    solve: `const isNumberForFirstDigit = 371875;
console.log(
  \`Первая цифра числа \${NumberForFirstDigit}: \${+[
    ...\`\${NumberForFirstDigit}\`,
  ][0]}\`
);`,
  },
  {
    id: 2.3,
    description: "Получение последней цифры числа",
    reason: "Преобразуем число в строку и берём символ по индексу (длина - 1)",
    solve: `const NumberForLastDigit = 371875;
console.log(
  \`Последняя цифра числа \${NumberForLastDigit}: \${Number(
    String(NumberForLastDigit)[NumberForLastDigit.toString().length - 1]
  )}\`
);`,
  },
  {
    id: 2.4,
    description: "Альтернативный способ получить последнюю цифру числа",
    reason: "Используем spread оператор и получаем последний элемент массива",
    solve: `const NumberForLastDigit = 371875;
console.log(
  \`Последняя цифра числа \${NumberForLastDigit}: \${+[
    ...\`\${NumberForLastDigit}\`,
  ][NumberForLastDigit.toString().length - 1]}\`
);`,
  },
  {
    id: 2.5,
    description: "Вычисление суммы первой и последней цифры числа",
    reason: "Получаем обе цифры через spread оператор и складываем их",
    solve: `const NumberToSumm = 77523;
console.log(
  \`Сумма первой и последней цифры числа \${NumberToSumm} равна \${(summDigits =
    +[...\`\${NumberToSumm}\`][0] +
    +[...\`\${NumberToSumm}\`][NumberToSumm.toString().length - 1])}\`
);`,
  },
  {
    id: 2.6,
    description: "Определение количества цифр в числе",
    reason: "Преобразуем число в строку и используем свойство length",
    solve: `const LengthOfNumber = 513280;
console.log(
  \`Количество цифр в числе \${LengthOfNumber} равно \${
    LengthOfNumber.toString().length
  }\`
);`,
  },
  {
    id: 2.7,
    description:
      "Сравнение первых цифр двух чисел (с учётом отрицательных чисел)",
    reason:
      "Берём модуль чисел и сравниваем первые цифры через spread оператор",
    solve: `const firstNumber = -878;
const secondNumber = 8987341;
const absFirstNumber = Math.abs(firstNumber);
const absSecondNumber = Math.abs(secondNumber);
[...\`\${absFirstNumber}\`][0] === [...\`\${absSecondNumber}\`][0]
  ? console.log(\`Первые цифры чисел \${firstNumber} и \${secondNumber} совпадают\`)
  : console.log(
      \`Первые цифры чисел \${firstNumber} и \${secondNumber} не совпадают\`
    );`,
  },
  // Уровень 1.3
  {
    id: 3.1,
    description: "Получение предпоследнего символа строки (если длина > 1)",
    reason: "Используем метод at(-2) для получения предпоследнего символа",
    solve: `const StringToPreLastSymbol = "предпоследний символ";
StringToPreLastSymbol.length > 1
  ? console.log(
      \`Предпоследний символ строки \${StringToPreLastSymbol}: \${StringToPreLastSymbol.at(
        -2
      )}\`
  : console.log("строка состоит из одного символа");`,
  },
  {
    id: 3.2,
    description: "Проверка делимости одного числа на другое без остатка",
    reason: "Используем оператор % для проверки остатка от деления",
    solve: `const firstNumber1_3 = 11;
const secondNumber1_3 = 5;
firstNumber1_3 % secondNumber1_3 === 0
  ? console.log(
      \`Число \${firstNumber1_3} делится на \${secondNumber1_3} без остатка\`
    )
  : console.log(
      \`Число \${firstNumber1_3} не делится на \${secondNumber1_3} без остатка\`
    );`,
  },

  // Уровень 1.4
  {
    id: 4.1,
    description: "Вывод всех целых чисел от 1 до 100",
    reason: "Используем простой цикл for с инкрементом",
    solve: `console.log("Целые числа в диапазоне от 1 до 100:");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}`,
  },
  {
    id: 4.2,
    description: "Вывод всех целых чисел от -100 до 0",
    reason: "Цикл for с отрицательными числами",
    solve: `console.log("Целые числа в диапазоне от -100 до 0:");
for (let i = -100; i <= 0; i++) {
  console.log(i);
}`,
  },
  {
    id: 4.3,
    description: "Вывод всех целых чисел от 100 до 1 (в обратном порядке)",
    reason: "Цикл for с декрементом",
    solve: `console.log("Целые числа в диапазоне от 100 до 1:");
for (let i = 100; i >= 1; i--) {
  console.log(i);
}`,
  },
  {
    id: 4.4,
    description: "Вывод всех чётных чисел от 1 до 100",
    reason: "Проверяем чётность с помощью оператора %",
    solve: `console.log("Целые чётные числа в диапазоне от 1 до 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`,
  },
  {
    id: 4.5,
    description: "Вывод всех чисел кратных трём от 1 до 100",
    reason: "Проверяем кратность трём с помощью оператора %",
    solve: `console.log("Целые числа, кратные трём, в диапазоне от 1 до 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}`,
  },
];

export default tasks;
