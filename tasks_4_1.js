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
function getDate(date) {
    const dayDate = date;
}