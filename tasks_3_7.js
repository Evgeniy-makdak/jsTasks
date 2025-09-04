console.log("Уровень 3.7 задачника code.me");
console.log("№1: Дана строка со словами. Отсортируйте слова в алфавитном порядке.");
const string3_7_1 = "Это не просто слова, абстракции побеждают эту словб";
const sortString3_7_1 = string3_7_1.split(" ").map((letter) => letter.toLowerCase());
console.log(sortString3_7_1.sort().join(" "));
console.log(
    "**************************************************************************************************"
);
console.log("№2: Дано число. Получите массив делителей этого числа.");
console.log("const num = 273;");
const number3_7_2 = 273;
const divisions3_7_2 = [];
for (let i = 2; i <= number3_7_2; i++) {
    if (number3_7_2 % i === 0) {
        divisions3_7_2.push(i)
    }
}
console.log(divisions3_7_2);
console.log(
    "**************************************************************************************************"
);
console.log("№3: Даны два числа. Получите массив общих делителей этих чисел.");
console.log("const num1 = 18;");
console.log("const num2 = 12;");
let number3_7_3_1 = 12;
let number3_7_3_2 = 18;
const MOD3_7_3 = [];
const divisions3_7_3 = [];
while (number3_7_3_1 !== 0) {
    if (number3_7_3_2 % number3_7_3_1 !== 0) {
        [number3_7_3_2, number3_7_3_1] = [number3_7_3_1, number3_7_3_2 % number3_7_3_1];
    } else {
        MOD3_7_3.push(number3_7_3_1)
        break;
    }
}
for (let i = 1; i <= MOD3_7_3; i++) {
    if (MOD3_7_3 % i === 0) {
        divisions3_7_3.push(i);
    }
}
console.log(divisions3_7_3);
console.log(
    "**************************************************************************************************"
);
console.log("№4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.");
const number3_7_4 = 21;
let count3_7_4 = 0;
const divisions3_7_4 = [];
for (let i = 2; i < number3_7_4; i++) {
    if (number3_7_4 % i === 0) {
        count3_7_4++;
        divisions3_7_4.push(i)
    }
}
if (count3_7_4 === 1) {
    console.log(`Число ${number3_7_4} имеет только один делитель, кроме него самого и единицы и этот делитель - ${divisions3_7_4[0]}`)
} else {
    console.log(`У числа ${number3_7_4} больше одного делителя - это ${divisions3_7_4.toString()}`)
}
console.log(
    "**************************************************************************************************"
);