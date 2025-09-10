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
const camelString3_8_3 = snakeString3_8_2.filter((el) => el !== "_");
console.log("camel" + camelString3_8_3[1][0].toUpperCase() + camelString3_8_3[1].slice(camelString3_8_3.length - 1));
console.log(
    "**************************************************************************************************"
);
console.log("№5: Сформируйте с помощью циклов следующий массив:");
console.log("[");
console.log(" [1, 2, 3],");
console.log(" [1, 2, 3],");
console.log(" [1, 2, 3],");
console.log(" [1, 2, 3],");
console.log(" [1, 2, 3],");
console.log("]");
const resultArray3_8_5 = [];
let underArray3_8_5 = [];
while (resultArray3_8_5.length < 4) {
    for (let i = 1; i <= 3; i++) {
        underArray3_8_5.push(i);
    }
    resultArray3_8_5.push(underArray3_8_5);
    underArray3_8_5 = [];
}
console.log('[');
resultArray3_8_5.forEach((arr, index) => {
    const comma = index < resultArray3_8_5.length - 1 ? ',' : '';
    console.log(`  [${arr.join(', ')}]${comma}`);
});
console.log(']');