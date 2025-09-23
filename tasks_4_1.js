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