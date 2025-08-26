console.log("Уровень 3.4 задачника code.me");
console.log("Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.");
const firstEvenNumbers = [];
for (let i= 10; i <= 1000; i++) {
    if ([...i.toString()][0] % 2 === 0) {
        firstEvenNumbers.push(i);
    }
}
console.log(firstEvenNumbers.join(" "));
console.log(
    "**************************************************************************************************"
);
console.log("Дан некоторый массив, например, вот такой:");
console.log("[1, 2, 3, 4, 5, 6]");
console.log("Поменяйте местами пары элементов этого массива:");
console.log("[2, 1, 4, 3, 6, 5]");
const defaultArray3_4_2 = [1, 2, 3, 4, 5, 6];
const mutateArray3_4_2 = [];
for (let i = 0; i < defaultArray3_4_2.length; i += 2) {
    mutateArray3_4_2.push(defaultArray3_4_2[i + 1], defaultArray3_4_2[i]);
}
console.log(mutateArray3_4_2);
