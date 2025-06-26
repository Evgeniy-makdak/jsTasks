console.log("Уровень 1.8 задачника code.me");
console.log("Заполните массив целыми числами от 1 до 10.");
let arreyFromOneToTen = []
for (let i = 1; i <= 10; i++) {
    arreyFromOneToTen.push(i)
}
console.log(arreyFromOneToTen);
console.log("Заполните массив четными числами из промежутка от 1 до 100.");
let arrayFromOneToHundred = []
for (let i = 2; i <= 100; i+=2) {
    arrayFromOneToHundred.push(i)
}
console.log(arrayFromOneToHundred);
console.log("Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.");
const fractionArray = [1.456, 2.125, 3.32, 4.1, 5.34]
const modyfyArray = fractionArray.map((x) => parseFloat(x.toFixed(1)))
console.log(modyfyArray);