console.log("Уровень 4.4 задачника code.me");
console.log("№1: Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.");
function devisionsOfNumber(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    console.log(`Количество делителей числа ${number} равно ${count}`);
}

devisionsOfNumber(8)
console.log(
    "**************************************************************************************************"
);