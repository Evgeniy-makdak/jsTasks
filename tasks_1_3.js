console.log("Уровень 1.3 задачника code.me");
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
const StringToPreLastSymbol = "предпоследний символ";
StringToPreLastSymbol.length > 1
  ? console.log(
      `Предпоследний символ строки ${StringToPreLastSymbol}: ${StringToPreLastSymbol.at(
        -2
      )}`
    )
  : console.log("строка состоит из одного символа");
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const firstNumber1_3 = 11;
const secondNumber1_3 = 5;
firstNumber1_3 % secondNumber1_3 === 0
  ? console.log(
      `Число ${firstNumber1_3} делится на ${secondNumber1_3} без остатка`
    )
  : console.log(
      `Число ${firstNumber1_3} не делится на ${secondNumber1_3} без остатка`
    );
