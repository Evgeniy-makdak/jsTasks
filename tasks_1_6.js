console.log("Уровень 1.6 задачника code.me");
console.log(`Дан массив с числами. Найдите сумму квадратов элементов этого массива.`)
const arrayToSummSquare = [5, 2, 8];
const resultOfArrayToSummSquare1 = arrayToSummSquare.reduce((acc, x) => {
    return acc + (x ** 2)
},0);
console.log(`Вариант 1: ${resultOfArrayToSummSquare1}`);
// *******
let resultOfArrayToSummSquare2 = 0;
for (let i = 0; i < arrayToSummSquare.length; i++) {
    resultOfArrayToSummSquare2 += arrayToSummSquare[i] ** 2
};
console.log(`Вариант 2: ${resultOfArrayToSummSquare2}`);
// *******
const resultOfArrayToSummSquare3 = arrayToSummSquare.map((x) => x ** 2).reduce((a, b) => a + b);
console.log(`Вариант 2: ${resultOfArrayToSummSquare3}`);
console.log(`Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.`)
const arreyFromNumbers = [36, 25, 81, 49];
const squareRootSummer = arreyFromNumbers.map((x) => Math.sqrt(x)).reduce((a, b) => a + b)
console.log(`Сумма квадратных корней чисел массива squareRootSummer:  ${squareRootSummer}`);
console.log(`Дан массив с числами. Найдите сумму положительных элементов этого массива.`)
const arreyAnyNumbers = [-11, 3, 32, -7, 0];
const summPositiveNumbers = arreyAnyNumbers.filter(x => x > 0).reduce((a, b) => a + b);
console.log(`Сумма положительных чисел массива arreyAnyNumbers: ${summPositiveNumbers}`);
console.log(`Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.`);
const arreyAnyNumbers2 = [2, -77, 8, 11, -0, 0, 1, -3]
const summPositiveAndLowerTenNumbers = arreyAnyNumbers2.filter(x => (x > 0 & x < 10)).reduce((a, b) => a + b);
console.log(`Сумма чисел массива arreyAnyNumbers2 больше 0 и меньше 10: ${summPositiveAndLowerTenNumbers}`);
