export const tasks_1_1 = [
  {
    id: 1,
    description: "Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.",
    reason: "Используем тернарный оператор для проверки условия (меньше или равно нулю).",
    solve: "const isNegativeNumber = -7;\nisNegativeNumber <= 0\n  ? console.log(\"Число отрицательное либо нулевое\")\n  : console.log(\"Число положительное\");"
  },
  {
    id: 2,
    description: "Дана строка. Выведите в консоль длину этой строки.",
    reason: "Свойство length возвращает длину строки.",
    solve: "const lengthString = \"I'm string\";\nconsole.log(`Длина строки ${lengthString}: ${lengthString.length}`);"
  },
  {
    id: 3,
    description: "Дана строка. Выведите в консоль последний символ строки.",
    reason: "Получаем последний символ через индекс (длина строки минус 1, так как индексы начинаются с 0).",
    solve: "const lastSymbol = \"bla-bla\";\nconsole.log(\n  `Последний символ строки ${lastSymbol} - ${lastSymbol[lastSymbol.length - 1]}`\n);"
  },
  {
    id: 4,
    description: "Дано число. Проверьте, четное оно или нет.",
    reason: "Проверяем остаток от деления на 2 (если 0 - число четное).",
    solve: "const evenNumber = 7;\nevenNumber % 2 === 0\n  ? console.log(`число ${evenNumber} чётное`)\n  : console.log(`число ${evenNumber} нечётное`);"
  },
  {
    id: 5,
    description: "Даны два слова. Проверьте, что последние буквы этих слов совпадают.",
    reason: "Сравниваем последние символы двух строк (обратите внимание, в исходном примере была ошибка - проверялись первые буквы, а не последние).",
    solve: "const firstWord = \"Alpha\";\nconst secondWord = \"Omega\";\nfirstWord[firstWord.length - 1] === secondWord[secondWord.length - 1]\n  ? console.log(`последние буквы слов ${firstWord} и ${secondWord} идентичны`)\n  : console.log(`последние буквы слов ${firstWord} и ${secondWord} отличаются`);"
  },
  {
    id: 6,
    description: "Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.",
    reason: "Проверяем последний символ строки, если это 'ь', берем предпоследний.",
    solve: "const isLastLetter = 'бутыль';\nconst lastChar = isLastLetter[isLastLetter.length - 1];\nconst result = lastChar === 'ь' ? isLastLetter[isLastLetter.length - 2] : lastChar;\nconsole.log(result);"
  }
];
