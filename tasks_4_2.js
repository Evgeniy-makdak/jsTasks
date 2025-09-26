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
function noZeros(number){
    return [...number.toString()].filter((el) => +el !== 0)
};
console.log(noZeros(70030910).join(""))