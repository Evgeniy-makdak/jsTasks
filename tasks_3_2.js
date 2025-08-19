console.log("Уровень 3.2 задачника code.me");
console.log("Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная и не равна нулю.");
const evenArray3_2_1 = [];
for (let i = 10; i <= 1000; i++) {
    if (+(i.toString()[i.toString().length - 2]) % 2 === 0 && +(i.toString()[i.toString().length - 2]) !== 0) {
        evenArray3_2_1.push(i);
    }
}
console.log(evenArray3_2_1.join(" "));
console.log(
    "**************************************************************************************************"
);
console.log(`Дан массив ${evenArray3_2_1}. Удалите из него каждый пятый элемент.`);
const mutateAvenArray3_2_1 = [];
for (let i = 0; i <= evenArray3_2_1.length; i++) {
    if (+i % 5 !== 0) {
        mutateAvenArray3_2_1.push(evenArray3_2_1[i])
    }
}
console.log(`Новый массив без каждого пятого элемента: ${mutateAvenArray3_2_1}`);
console.log(
    "**************************************************************************************************"
);
console.log("Дана некоторая переменная с числом:");
console.log("const number3_2_3 = 7");
console.log("Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:");
console.log("0000000");
const number3_2_3 = 7;
const zeroString3_2_2 = [];
for (let i = 1; i <= +number3_2_3; i++) {
    zeroString3_2_2.push(0)
}
console.log((zeroString3_2_2).join(""))