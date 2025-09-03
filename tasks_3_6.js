console.log("Уровень 3.6 задачника code.me");
console.log("Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.");
const array3_6_1 = [217, 885, 24, 99, 0.15, -77];
console.log(array3_6_1.filter((elem) => Math.abs(elem).toString().length < 3));
console.log(
    "**************************************************************************************************"
);
console.log("Дано некоторое число:");
console.log("let num = 12345;");
console.log("Проверьте, что все цифры этого числа больше нуля.");
const number3_6_2 = 12345;
console.log([...number3_6_2.toString()].filter((el) => +el > 0));
if (number3_6_2 == [...number3_6_2.toString()].filter((el) => +el > 0).join("")) {
    console.log(`В числе ${number3_6_2} все цифры больше нуля.`)
} else {
    console.log(`В числе ${number3_6_2} есть цифры равные нулю.`)
}
console.log(
    "**************************************************************************************************"
);
console.log("Дан некоторый массив, например, вот такой:");
console.log("[123, 456, 789]");
console.log("Слейте все элементы этого массива в один массив, разбив их посимвольно:");
console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9]");
const array3_6_3 = [123, 456, 789];
const mutateArray3_6_3 = array3_6_3.map((arr) => [...arr.toString()]);
resultArray3_6_3 = []
for (let i = 0; i < mutateArray3_6_3.length; i++) {
    resultArray3_6_3.push(...mutateArray3_6_3[i])
}
console.log((resultArray3_6_3.map((el) => +el)))
console.log(
    "**************************************************************************************************"
);
console.log("Дан следующая структура:");
console.log("let data = [");
console.log(" {");
console.log("  1: 11,");
console.log("  2: 12,");
console.log("  3: 13,");
console.log(" },");
console.log(" 2: {");
console.log("  1: 21,");
console.log("  2: 22,");
console.log("  3: 23,");
console.log(" },");
console.log(" 3: {");
console.log("  1: 24,");
console.log("  2: 25,");
console.log("  3: 26,");
console.log(" },");
console.log("]");
console.log("Найдите сумму элементов этой структуры.");
const data3_6_4 = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
console.log(Object.values(data3_6_4).map((arr) => Object.values(arr)).map((el) => el.reduce((acc, e) => {
	return +acc + +e;
})).reduce((acc, el) => {
	return +acc + +el
}));
