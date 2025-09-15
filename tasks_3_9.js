console.log("Уровень 3.9 задачника code.me");
console.log("№1: Дана строка. Проверьте, что эта строка состоит только из цифр.");
const string3_9_1 = "531801";
const isNumbersString3_9_1 = [...string3_9_1].filter((el) => +el % 1 === 0).join("");
string3_9_1.length === isNumbersString3_9_1.length ? console.log(`Строка ${string3_9_1} полностью состоит из цифр`) : 
console.log(`В строке ${string3_9_1} содержатся отличные от цифр символы.`);
console.log(
    "**************************************************************************************************"
);
console.log("№2: Дана строка. Проверьте, что эта строка состоит только из четных цифр.");
const string3_9_2 = "62418";
const evenString3_9_2 = [...string3_9_2].filter((el) => +el % 2 === 0).join("");
string3_9_2.length === evenString3_9_2.length ? console.log(`Строка ${string3_9_2} состоит из чётных чисел`) : 
console.log(`В строке ${string3_9_2} есть нечётные числа.`);
console.log(
    "**************************************************************************************************"
);
console.log("№3: Дан массив со числами. Удалите из него числа, имеющие два и более нуля.");
const array3_9_3 = [18, 100, 231, 0.1201, 70, 5000001];
const array3_9_3WithoutZeros = [];
array3_9_3.forEach((arr) => {
    count = 0;
    for (let i = 0; i < arr.toString().length; i++) {
        if (arr.toString()[i] === "0") {
            count++
        }
    }
    if (count < 2) {
        array3_9_3WithoutZeros.push(arr)
    }
    count = 0;
});
console.log(array3_9_3WithoutZeros);
console.log(
    "**************************************************************************************************"
);
console.log("№4: Найдите все числа от 1 до 1000, сумма цифр которых равна 13.");
const summ13 = [];
for (let i = 1; i <= 1000; i++) {
    if (([...[i].join("")].reduce((acc, num) => +acc + +num)) === 13) {
        summ13.push(i);
    }
}
console.log(summ13.join(" "));
console.log(
    "**************************************************************************************************"
);