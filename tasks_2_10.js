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
const defaultString2_10_3 = "abcde abcde abcde";
const mutateDefaultString2_10_3 = defaultString2_10_3.split(" ").map((elem) => elem[0] = "!" + elem.slice(1, elem.length));
console.log(mutateDefaultString2_10_3.join(" "));
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив с числами:");
console.log("[1, 2, 3, 3, 4, 5]");
console.log("Проверьте, что в этом массиве есть два одинаковых элемента подряд.");
const defaultArray2_10_4 = [1, 2, 3, 3, 4, 5];
for (let i = 0; i < defaultArray2_10_4.length; i += 2) {
    if (defaultArray2_10_4[i] === defaultArray2_10_4[i + 1]) {
        console.log(`В массиве ${defaultArray2_10_4} есть одинаковые элементы подряд - это ${defaultArray2_10_4[i]}`);
    }
}