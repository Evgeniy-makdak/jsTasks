console.log("Уровень 2.2 задачника code.me");
console.log("Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.");
const randomArray = [52, -7, 11, 8, -3, -0, -794];
console.log(`Количество отрицательных чисел массива ${randomArray} равно ${+(randomArray.filter((elem) => elem < 0).length)}`);
console.log("**************************************************************************************************")
console.log("Дан массив с числами. Оставьте в нем только положительные числа.");
console.log(`Выборка положительных чисел массива [${randomArray}] : [${randomArray.filter((elem) => elem > 0)}]`);
console.log("**************************************************************************************************")
console.log("Дана строка. Удалите предпоследний символ из этой строки.");
const defaultString = "Strinng";
console.log(`Строка ${defaultString} без предпоследнего символа: ${defaultString.slice(0, -2)}${defaultString[defaultString.length - 1]}`);
console.log("**************************************************************************************************")
console.log("Дан некоторый массив, например, вот такой:");
console.log("[1, 2, 3, 4, 5, 6]");
console.log("Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.");
const arrayToDevider = [1, 2, 3, 4, 5, 6];
const firstElemsSummer = (arrayToDevider.slice(0, arrayToDevider[(arrayToDevider.length / 2) - 1])).reduce((acc, x) => acc + x);
const secondElemsSummer = (arrayToDevider.slice(arrayToDevider[(arrayToDevider.length / 2) - 1])).reduce((acc, x) => acc + x);
console.log(`Сумма первых чисел массива [${arrayToDevider}]: ${firstElemsSummer}, делённая на сумму вторых чисел: ${secondElemsSummer} равна:`);
console.log('' + (firstElemsSummer / secondElemsSummer));
