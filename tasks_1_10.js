console.log("Уровень 1.10 задачника code.me");
console.log(
  "Заполните массив случайными целыми числами из промежутка от 1 до 100."
);
let randomArray = [];
while (randomArray.length < 10) {
  randomArray.push(+(Math.random(0, 1) * 10).toFixed(0));
}
console.log(randomArray);
console.log(
  "Дано некоторое число: 12345. Выведите в консоль все его символы с конца."
);
const defaultNumber = "12345";
console.log(defaultNumber.toString().split("").reverse().toString());
console.log([...defaultNumber].reverse().toString());
console.log(
 ` Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. По очереди выведите в консоль подмассивы из двух элементов нашего массива: `
)
console.log("[1, 2]");
console.log("[3, 4]");
console.log("[5, 6]");
const defaultArray = [1, 2, 3, 4, 5, 6];
let doubleArray = [];

for (let i = 0; i < defaultArray.length; i++) {
  doubleArray.push(defaultArray[i]);
  
  if (doubleArray.length === 2 || i === defaultArray.length - 1) {
    console.log(doubleArray);
    doubleArray = [];
  }
}