console.log("Уровень 2.6 задачника code.me");
console.log("Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.");
const mixedString = "7jQue33ry1&L"
console.log("**************************************************************************************************")
const indexNumbersArray = [];
mixedString.split("").forEach((elem, index) => {
    if (elem.charCodeAt(0) >= 48 && elem.charCodeAt(0) <= 57) {
        indexNumbersArray.push(index)
    }
})
console.log(`Номера позиций всех цифр строки ${mixedString} is [${indexNumbersArray}]`);
console.log("**************************************************************************************************")
console.log("Дан массив с некоторыми числами, например, вот такой:")
console.log("[123, 456, 789]")
console.log("Напишите код, который перевернет числа в этом массиве по следующему принципу:")
console.log("[321, 654, 987]")
const firstArray = [123, 456, 789];
const reverceArray = [];
firstArray.forEach(elem => {
    reverceArray.push([...elem.toString().split(",").map((elem) => elem.split("").reverse().join(""))]);
})
console.log(reverceArray.flatMap((elem) => +elem[0]));
console.log("**************************************************************************************************")
console.log("Дана некоторая строка с числом:")
console.log("1234567")
console.log("Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:")
console.log("1 234 567");
const numbersString = "1234567";
let numbersStringWithDeviders = [];
let count = 0;
for (let i = numbersString.length - 1; i >= 0; i--) {
    numbersStringWithDeviders.push(numbersString[i]);
    count++;
    if (count === 3 && i !== 0) {
        numbersStringWithDeviders.push(" ");
        count = 0;
    }
}
console.log(numbersStringWithDeviders.reverse().join(""));
