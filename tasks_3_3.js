console.log("Уровень 3.3 задачника code.me");
console.log("Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.");
const array3_3_1 = ["nine" , "one", "me", "73", "javascript"];
const mutateArray3_3_1 = array3_3_1.filter((word) => word.length <= 3);
console.log(mutateArray3_3_1);
console.log(
    "**************************************************************************************************"
);
console.log("Дано некоторое число:");
console.log("1357");
console.log("Проверьте, что все цифры этого числа являются нечетными.");
const number3_3_2 = 13057;
const noEvenNumbers3_3_2 = [...number3_3_2.toString()].filter((num) => num % 2 !== 0);
if ([...number3_3_2.toString()].length === noEvenNumbers3_3_2.length) {
    console.log(`В числе ${number3_3_2} содержатся только нечётные цифры`);
} else {
    console.log(`В числе ${number3_3_2} присутствуют чётные цифры`);
}
console.log(
    "**************************************************************************************************"
);
console.log("Дано некоторое слово:");
console.log("abcba");
console.log("Проверьте, что это слово читается одинаково с любой стороны.");