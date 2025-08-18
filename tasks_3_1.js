console.log("Уровень 3.1 задачника code.me");
console.log("Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.");
const defaultNumber3_1 = 51789;
for (let i = 0; i < defaultNumber3_1.toString().length; i++) {
    if (+defaultNumber3_1.toString()[i] >= +defaultNumber3_1.toString()[i + 1]) {
        console.log(`Цифры в числе ${defaultNumber3_1} расположены не в порядке возрастания!`);
        break;
    } else {
        console.log(`Цифры в числе ${defaultNumber3_1} расположены в порядке возрастания!`);
        break;
    }
}
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив:");
console.log("[1, '', 2, 3, '', 5]");
console.log("Удалите из массива все пустые строки.");
const defaultArray3_1_2 = [1, '', 2, 3, '', 5];
const defaultArray3_1_2NoEmpty = defaultArray3_1_2.filter((el) => el !== '');
console.log(defaultArray3_1_2NoEmpty);
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив:");
console.log("[");
console.log("[2, 1, 4, 3, 5],");
console.log("[3, 5, 2, 4, 1],");
console.log("[4, 3, 1, 5, 2],");
console.log("]");
console.log("Отсортируйте элементы в каждом подмассиве.");
const defaultArray3_1_3 = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]
const sortArray = defaultArray3_1_3.map((arr) => arr.sort((a, b) => a - b));
console.log(sortArray);
console.log(
    "**************************************************************************************************"
);
console.log("Даны два массива:");
console.log("let arr1 = [1, 2, 3];");
console.log("let arr2 = [1, 2, 3, 4, 5];");
console.log("Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.");
const defaultArray1_3_1_4 = [1, 2, 3];
const defaultArray2_3_1_4 = [73, 1, 2, 3, 4, 5, 22];
console.log(defaultArray2_3_1_4.slice(0, defaultArray1_3_1_4.length));