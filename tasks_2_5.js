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