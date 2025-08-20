console.log("Уровень 3.2 задачника code.me");
console.log("Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная и не равна нулю.");
const evenArray3_2_1 = [];
for (let i = 10; i <= 1000; i++) {
    if (+(i.toString()[i.toString().length - 2]) % 2 === 0 && +(i.toString()[i.toString().length - 2]) !== 0) {
        evenArray3_2_1.push(i);
    }
}
console.log(evenArray3_2_1.join(" "));
console.log(
    "**************************************************************************************************"
);
console.log(`Дан массив ${evenArray3_2_1}. Удалите из него каждый пятый элемент.`);
const mutateAvenArray3_2_1 = [];
for (let i = 0; i <= evenArray3_2_1.length; i++) {
    if (+i % 5 !== 0) {
        mutateAvenArray3_2_1.push(evenArray3_2_1[i])
    }
}
console.log(`Новый массив без каждого пятого элемента: ${mutateAvenArray3_2_1}`);
console.log(
    "**************************************************************************************************"
);
console.log("Дана некоторая переменная с числом:");
console.log("const number3_2_3 = 7");
console.log("Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:");
console.log("0000000");
const number3_2_3 = 7;
const zeroString3_2_2 = [];
for (let i = 1; i <= +number3_2_3; i++) {
    zeroString3_2_2.push(0)
}
console.log((zeroString3_2_2).join(""));
console.log(
    "**************************************************************************************************"
);
console.log("Дана массив:");
console.log("[");
console.log("[1, 2, 3],");
console.log("[4, 5, 6],");
console.log("[7, 8, 9],");
console.log("Найдите сумму элементов этого массива.");
const array3_2_4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const sunnerOfArray3_2_4 = array3_2_4.map((arr) => arr.reduce((acc, el) => {
    return (+acc + +el)
}));
console.log(sunnerOfArray3_2_4.reduce((acc, elem) => {
    return +acc + +elem
}));
console.log(
    "**************************************************************************************************"
);
console.log("Дана некоторая строка со словами:");
console.log("aaa bbb ccc eee fff");
console.log("Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:");
console.log("aaa ccc fff");
const string3_2_5 = "aaa bbb ccc eee fff";
const mutateString3_2_5 = [];
for (let i = 0; i < string3_2_5.split(" ").length; i++) {
    if (i % 2 === 0) {
        mutateString3_2_5.push(string3_2_5.split(" ")[i])
    }
};
console.log(mutateString3_2_5.join(" "))