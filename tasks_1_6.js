console.log("Уровень 1.6 задачника code.me");
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
const arrayToSummSquare = [5, 2, 8];
const resultOfArrayToSummSquare1 = arrayToSummSquare.reduce((acc, x) => {
    return acc + (x ** 2)
},0);
console.log(resultOfArrayToSummSquare1);
// *******
let resultOfArrayToSummSquare2 = 0;
for (let i = 0; i < arrayToSummSquare.length; i++) {
    resultOfArrayToSummSquare2 += arrayToSummSquare[i] ** 2
};
console.log(resultOfArrayToSummSquare2);
// *******
const resultOfArrayToSummSquare3 = arrayToSummSquare.map((x) => x ** 2).reduce((a, b) => a + b);
console.log(resultOfArrayToSummSquare3);
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.