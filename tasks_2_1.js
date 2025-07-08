console.log("Уровень 2.1 задачника code.me");
console.log("Дана некоторая строка. Найдите позицию первого нуля в строке.");
const stringWithZero = "52170832006000";
const arrayFromStringWithZero = stringWithZero.split("");
let positionOfFirstZero = 0;
for (let i = 0; i < stringWithZero.length; i++) {
  if (stringWithZero[i] !== "0") {
    positionOfFirstZero += 1;
  } else break;
}
console.log(
  `Первый нуль в строке ${stringWithZero} ${positionOfFirstZero + 1} по счёту`
);
console.log("**************************************************************************************************")
console.log(
  "Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти."
);
let summerOfFirstAndSecondasNumbers = [];
for (let i = 1; i <= 1000; i++) {
    if (+i.toString().split("")[0] + +i.toString().split("")[1] === 5) {
      summerOfFirstAndSecondasNumbers.push(i);
    }
}
console.log(summerOfFirstAndSecondasNumbers);
console.log("**************************************************************************************************")
console.log("Дан массив. Удалите из него элементы с заданным значением.");
const defaultArray = [37, 'array', {name: 'Poluect', age: '731'}, "78", 12, ["7", 7, 'word']];
const newArray = defaultArray.filter((elem) => typeof(elem) === 'object')
console.log(newArray);
console.log("**************************************************************************************************")
console.log("Дан некоторый массив, например, вот такой:");
console.log("[1, 2, 3, 4, 5, 6]");
console.log("Найдите сумму первой половины элементов этого массива.");
const simpleArray = [1, 2, 3, 4, 5, 6];
const summerOfFirstsElements = (simpleArray.slice(0, simpleArray.length / 2).reduce((acc, el) => acc + el));
console.log(summerOfFirstsElements);
