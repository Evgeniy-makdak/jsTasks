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