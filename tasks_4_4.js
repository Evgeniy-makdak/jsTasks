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

// console.log("#б/н: Сделайте функцию, которая будет выводить произвольное сообщение в консоль через 7 секунд.");

// function sleep(ms) {
//     return new Promise(resolve => 
//        setTimeout(resolve, ms)
//     )
// }

// async function time() {
//     console.log('отсчёт начался');
//     await sleep(7000);
//     console.log('прошло ровно 7 секунд');
// };

// time();
console.log(
    "**************************************************************************************************"
);
console.log("№2: Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.");
const slowNumber = (number) => {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    count > 1 ? console.log(`Число ${number} не является простым.`)  : console.log(`число ${number} простое.`)
}
slowNumber(7)
console.log(
    "**************************************************************************************************"
);
console.log("№3: Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.");
const evelNumbers = (number) => {
    const arrFromNumber = [...number.toString()].filter((unit) => +unit % 2 !== 0).join('');
    return arrFromNumber;
}
console.log(evelNumbers(52388));
console.log(
    "**************************************************************************************************"
);