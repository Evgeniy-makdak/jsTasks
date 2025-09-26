console.log("Уровень 4.1 задачника code.me");
console.log("№1: Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр");
const number4_2_1 = (number) => {
    return [...number.toString()].reduce((acc, el) => {
        return +acc + +el
    }, 0)
};
console.log(number4_2_1(35))
console.log(
    "**************************************************************************************************"
);
console.log("№2: Сделайте функцию, которая параметром будет принимать число и удалять из него нули.");
function noZeros(number) {
    return [...number.toString()].filter((el) => +el !== 0)
};
console.log(noZeros(70030910).join(""))
console.log(
    "**************************************************************************************************"
);
console.log("№3: Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.");
const data = '2027-01-01';
const howManyDaysTo = (data) => {
    const formatDate = data.split("-").join(", ")
    const targetDate = new Date(formatDate).setHours(0, 0, 0, 0);
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const diffMs = targetDate - currentDate;
    const diffDays = Math.round(Math.abs(diffMs) / (1000 * 3600 * 24));

    const direction = diffMs >= 0 ? 'осталось' : 'прошло';

    return `${direction} ${diffDays} дней`;
}

console.log(`С ${data} ${howManyDaysTo(data)}`);