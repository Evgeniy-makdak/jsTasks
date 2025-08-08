console.log("Уровень 2.9 задачника code.me");
console.log("Дано некоторое число:");
console.log("123456");
console.log("Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:");
console.log("12 + 34 + 56");
const defaultMumber2_9 = 123456;
const defaultMumber2_9String = [...defaultMumber2_9.toString()]
let resultPairSumm = [];
let count = 0;
for (let i = 0; i < defaultMumber2_9String.length; i += 2) {
    resultPairSumm.push(defaultMumber2_9String[i] + defaultMumber2_9String[i + 1]);
}
const summerOfResult = resultPairSumm.map((el) => +el)
console.log(summerOfResult.reduce((acc, num) => acc + num));
