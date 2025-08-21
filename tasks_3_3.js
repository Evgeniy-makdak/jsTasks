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
const word3_3_3 = "abcba";
if (word3_3_3 === [...word3_3_3].reverse().join("")) {
    console.log(`Строка ${word3_3_3} является анаграммой!`)
} else {
    console.log(`Строка ${word3_3_3} не анаграмма!`)
}
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив:");
console.log("[");
console.log(" [");
console.log("  [11, 12, 13],");
console.log("  [14, 15, 16],");
console.log("  [17, 18, 19],");
console.log(" ]");
console.log("[");
console.log(" [");
console.log("  [20, 21, 22],");
console.log("  [23, 24, 25],");
console.log("  [26, 27, 28],");
console.log(" ]");
console.log(" [");
console.log("  [29, 30, 31],");
console.log("  [32, 33, 34],");
console.log("  [35, 36, 37],");
console.log(" ]");
console.log("]");
console.log("Найдите сумму элементов этого массива.");
const array3_3_4 = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];
let arrSumFirst = [];
for (let i = 0; i < array3_3_4.length; i++) {
    arrSumFirst.push(array3_3_4[i].map((arrFirstLabel) => arrFirstLabel.reduce((acc, el) => {
        return +acc + +el;
    })));
}
console.log((arrSumFirst.map((arr) => arr.reduce((acc, elem) => {
    return +acc + +elem;
}))).reduce((acc, el) => {
    return +acc + +el;
}));
