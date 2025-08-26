console.log("Уровень 3.4 задачника code.me");
console.log("Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.");
const firstEvenNumbers = [];
for (let i= 10; i <= 1000; i++) {
    if ([...i.toString()][0] % 2 === 0) {
        firstEvenNumbers.push(i);
    }
}
console.log(firstEvenNumbers.join(" "));
console.log(
    "**************************************************************************************************"
);
console.log("Дан некоторый массив, например, вот такой:");
console.log("[1, 2, 3, 4, 5, 6]");
console.log("Поменяйте местами пары элементов этого массива:");
console.log("[2, 1, 4, 3, 6, 5]");
const defaultArray3_4_2 = [1, 2, 3, 4, 5, 6];
const mutateArray3_4_2 = [];
for (let i = 0; i < defaultArray3_4_2.length; i += 2) {
    mutateArray3_4_2.push(defaultArray3_4_2[i + 1], defaultArray3_4_2[i]);
}
console.log(mutateArray3_4_2);
console.log(
    "**************************************************************************************************"
);
console.log("Дан объект:");
console.log("let obj = {");
console.log(" 1: {");
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
console.log("}");
console.log("Найдите сумму элементов этого объекта.");
const obj3_4_3 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}