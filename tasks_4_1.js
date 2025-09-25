console.log("Уровень 4.1 задачника code.me");
console.log("№1: Сделайте функцию, которая вернет текущий день недели словом.");
const dayDate = new Date().getDay();
const namingDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
]
console.log(namingDays[dayDate])
console.log(
    " Вариант 2 **************************************************************************************************"
);
function getCurrentDayOfWeek() {
    const dayDate = new Date().getDay();
    const namingDays = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота"
    ];

    return namingDays[dayDate];
}

console.log(getCurrentDayOfWeek());
console.log(
    "**************************************************************************************************"
);
console.log("№2: Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.");
const dayDate2 = '2025-09-24'
function getDate(dayDate2) {
    const formatDate = dayDate2.split("-").join(", ");
    const dayNumber = new Date(formatDate).getDay();
    const namingDays2 = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота"
    ];
    return namingDays2[dayNumber];
};
console.log(`Дате ${dayDate2} соответствует день недели ${getDate(dayDate2)}`)
console.log(
    "**************************************************************************************************"
);
console.log("№3: Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.");
const seconds = 172801;
const daysFromSeconds = (seconds) => {
    return (seconds - seconds % 86400) / 86400;
};
console.log(`В ${seconds} секундах ${daysFromSeconds(seconds)} суток`)
console.log(
    "**************************************************************************************************"
);
console.log("№4: Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.");
const eraserString = (num, string) => {
    return string.slice(0, num);
};
console.log(eraserString(3, 'example'));
console.log(
    "**************************************************************************************************"
);
console.log("№5: Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.");
function deviders4_1_5(number){
    const arrayDeviders = [];
     for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arrayDeviders.push(i);
        }
    }
    
    // Суммируем делители
    return arrayDeviders.reduce((acc, num) => acc + num, 0);
}
console.log(deviders4_1_5(9))