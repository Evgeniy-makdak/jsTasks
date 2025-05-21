console.log("Уровень 1.1 задачника code.me");
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const NegativeNumber = -7;
NegativeNumber <= 0
  ? console.log("Число отрицательное либо нулевое")
  : console.log("Число положительное");
// Дана строка. Выведите в консоль длину этой строки.
const lengthString = "I'm string";
console.log(`Длина строки ${lengthString}: ${lengthString.length}`);
// Дана строка. Выведите в консоль последний символ строки.
const lastSymbol = "bla-bla";
console.log(
  `Последний символ строки ${lastSymbol} - ${lastSymbol[lastSymbol.length - 1]}`
);
// Дано число. Проверьте, четное оно или нет.
const evenNumber = 7;
evenNumber % 2 === 0
  ? console.log(`число ${evenNumber} чётное`)
  : console.log(`число ${evenNumber} нечётное`);
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
const firstWord = "Alpha";
const secondWord = "Omega";
firstWord[firstWord.length - 1] === secondWord[secondWord.length - 1]
  ? console.log(`последние буквы слов ${firstWord} и ${secondWord} идентичны`)
  : console.log(`последние буквы слов ${firstWord} и ${secondWord} отличаются`);
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
const LastLetter = "бутылка";
LastLetter[LastLetter.length - 1] !== "ь"
  ? console.log(
      `последняя буква в слове ${LastLetter}: ${
        LastLetter[LastLetter.length - 1]
      }`
    )
  : console.log(
      `предпоследняя буква в слове ${LastLetter}: ${
        LastLetter[LastLetter.length - 2]
      }`
    );
