console.log("Уровень 3.10 задачника code.me");
console.log("№1: Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.");
const array3_10 = [88, 11, 272];
const doubleArray3_10 = [];
array3_10.forEach((el) => doubleArray3_10.push(el, el));
console.log(doubleArray3_10);
console.log(
    "**************************************************************************************************"
);
console.log("№2: Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.");
const array3_10_2 = [520, 6, 73, 462, 8, 427.8, -200];
const number3_10_2 = 837528;
const newArray3_10_2 = array3_10_2.filter((el) => number3_10_2 % el === 0);
console.log(newArray3_10_2)
console.log(
    "**************************************************************************************************"
);
console.log("№3: Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.");
const newArray3_10_3_1 = 457346547;
const newArray3_10_3_2 = 715;
const array3_10_3 = [...newArray3_10_3_1.toString()].concat([...newArray3_10_3_2.toString()]);
console.log(array3_10_3);
console.log(
    "**************************************************************************************************"
);
console.log("№4: Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.");
const number3_10_4 = 37353813;
const indexArray3_10_4 = [];
for (let i = 0; i < number3_10_4.toString().length; i++) {
    if (number3_10_4.toString()[i] === "3") {
        indexArray3_10_4.push(i);
    }
}
console.log(indexArray3_10_4.slice(1, indexArray3_10_4.length - 1));
console.log(
    "**************************************************************************************************"
);
console.log("№5: Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.");
const array3_10_5 = [872, 277, 7, 11, 34, 6551];
const mutateArray3_10_5 = [];
array3_10_5.forEach((el) => {
    if (new Set([...el.toString()].join("")).size === [...el.toString()].length) {
        mutateArray3_10_5.push(el)
    }
})
console.log(`Из исходного массива ${array3_10_5} получили ${mutateArray3_10_5}`)