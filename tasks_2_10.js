console.log("Уровень 2.10 задачника code.me");
console.log("Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.");
const defaultString2_10 = "st0371l";
const lettersCounter = ([...defaultString2_10].filter((el) => +el.charCodeAt() < 48 || +el.charCodeAt() > 57)).length;
console.log(`В строке ${defaultString2_10} количество букв равно ${lettersCounter}`);
console.log(
    "**************************************************************************************************"
);
console.log("Дано число. Получите первую четную цифру с конца этого числа.");
const defaultNumbers2_10 = 237658317;
const evenNumberFromDefaultNumbers2_10 = [...defaultNumbers2_10.toString()].filter((nunber) => +nunber % 2 === 0).join("").slice(-1);
console.log(`Первая чётная цифра с конца числа ${defaultNumbers2_10} - это ${evenNumberFromDefaultNumbers2_10}`);
console.log(
    "**************************************************************************************************"
);
console.log("Дана некая строка:");
console.log("abcde abcde abcde");
console.log("Замените в ней первый символ каждого слова на '!':");
console.log("!bcde !bcde !bcde");