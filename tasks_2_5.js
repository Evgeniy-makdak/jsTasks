console.log("Уровень 2.5 задачника code.me");
console.log("Дана некоторая строка, например, вот такая:");
console.log("023m0df0dfg0");
console.log("Получите массив позиций всех нулей в этой в строке и объект, где ключ - номер позиции нуля, а значение - сам нуль.");
const stringToZeroPositions = "023m0df0dfg0";
const stringToZeroPositionsArray = [];
const stringToZeroPositionsObject = {};
for (let i = 0; i < stringToZeroPositions.length; i++) {
    if (+stringToZeroPositions[i] === 0) {
        stringToZeroPositionsArray.push(i);
        stringToZeroPositionsObject[i] = stringToZeroPositions[i]
    }
}
console.log(stringToZeroPositionsArray);
console.log(stringToZeroPositionsObject)
console.log("**************************************************************************************************")
console.log("Дана некоторая строка:");
console.log("abcdefg");
console.log("Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:");
console.log("abdeg");
const defaultStringWithAllLetters = "abcdefg";
let stringWithoutAllLetters = [];
for (let i = 0; i < defaultStringWithAllLetters.length; i++) {
    if((i + 1) % 3 !== 0) {
        stringWithoutAllLetters.push(defaultStringWithAllLetters[i])
    }
}
console.log(stringWithoutAllLetters.join(""));
console.log("Второй способ, используя forEach:")
const stringWithoutAllLettersByForEach = [];
[...defaultStringWithAllLetters].forEach((elem, index) => {
    if ((index + 1) % 3 !== 0) {
        stringWithoutAllLettersByForEach.push(elem);
    }
})
console.log(stringWithoutAllLettersByForEach.join(""));
console.log("Третий способ, используя filter:")
const stringWithoutAllLettersByFilter = [...defaultStringWithAllLetters].filter((_, e) => (e + 1) % 3 !== 0);
console.log(stringWithoutAllLettersByFilter.join(""))
console.log("**************************************************************************************************")
console.log("Дан некоторый массив, например, вот такой:");
console.log("[1, 2, 3, 4, 5, 6]");
console.log("Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.");
const defaultArreyTodivision = [1, 2, 3, 4, 5, 6];