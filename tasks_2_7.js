console.log("Уровень 2.7 задачника code.me");
console.log("Дана некоторая строка:");
console.log("a bc def ghij");
console.log(
  "Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:"
);
console.log("A BC DEF ghij");
const defaultString2_7_1 = "a bc def ghij";
let transformString2_7_1 = [];
const arrayFromDefaultString2_7_1 = defaultString2_7_1.split(" ");
for (let i = 0; i < arrayFromDefaultString2_7_1.length; i++) {
  if (arrayFromDefaultString2_7_1[i].length <= 3) {
    transformString2_7_1.push(arrayFromDefaultString2_7_1[i].toUpperCase());
  } else {
    transformString2_7_1.push(arrayFromDefaultString2_7_1[i]);
  }
}
console.log(transformString2_7_1.join(" "));
console.log(
  "**************************************************************************************************"
);
console.log(
  "Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем?"
);
const defaultSymbol2_7_2 = "E";
if (defaultSymbol2_7_2.toUpperCase() === defaultSymbol2_7_2) {
    console.log(`Символ ${defaultSymbol2_7_2} написан в верхнем регистре`); 
} else if (defaultSymbol2_7_2.toLowerCase() === defaultSymbol2_7_2) {
    console.log(`Символ ${defaultSymbol2_7_2} написан в нижнем регистре`)
}
console.log(
  "**************************************************************************************************"
);
console.log("Дано некоторое число, например, такое:");
console.log("123789");
console.log(
  "Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:"
);
console.log("28");
const defaultNumber2_7_3 = 123789;
const arrayFromDefaultNumber2_7_3 = defaultNumber2_7_3.toString().split("");
const evenNumber2_7_3 = arrayFromDefaultNumber2_7_3.filter((number) => +number % 2 === 0);
console.log(evenNumber2_7_3.join(""));