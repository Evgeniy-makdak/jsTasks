console.log("Уровень 3.8 задачника code.me");
console.log("№1: Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.");
const array3_8_1 = [38, 13, 273, 0.35, 2, 0.002, 10000001];
const array3_8_1WithTree = array3_8_1.filter((elems) => elems.toString().includes("3"));
const noThreeArray3_8_1 = array3_8_1.filter((elems) => !elems.toString().includes("3"));
array3_8_1.length === array3_8_1WithTree.length ? console.log(`Все числа массива ${array3_8_1} содержат цифру 3`) : console.log(`В одной или нескольких числах массива ${array3_8_1} отсутствуют цифры 3. Это ${noThreeArray3_8_1}`);
console.log(
    "**************************************************************************************************"
);
console.log("№2: Дана строка в формате:");
console.log("kebab-case");
console.log("Преобразуйте ее в формат:");
console.log("snake_case");
const string3_8_2 = "kebab-case";
const snakeString3_8_2 = []
for (let i = 0; i < string3_8_2.split("-").length; i++) {
    if (string3_8_2.split("-")[i] === "kebab") {
        snakeString3_8_2.push("snake")
    } else {
        snakeString3_8_2.push(string3_8_2.split("-")[i])
    }
}
console.log(snakeString3_8_2.join("_"))
console.log(
    "**************************************************************************************************"
);
console.log("№3: Дана строка в формате:");
console.log("snake_case");
console.log("Преобразуйте ее в формат:");
console.log("camelCase");