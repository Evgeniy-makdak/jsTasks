console.log("Уровень 2.3 задачника code.me");
console.log("Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.");
const randomString = "Ba3r7baRoss*1"
let codeOfFirstNumber = -1
for (let i = 0; i < randomString.length; i++) {
    const charCode = randomString[i].charCodeAt(0)
    if (charCode >= 48 && charCode <= 57) {
        codeOfFirstNumber = i;
        break;
    }
}
    console.log(`Первая цифра в строке ${randomString} находится на позиции ${codeOfFirstNumber}`);
console.log("**************************************************************************************************")
console.log("Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.");
const baseObject = {
    mark: "Tesla",
    type: "sedan",
    year: "2027",
    color: "gray",
}
const keysArray = [];
const valuesArray = [];
function destrictObject() {
    for (const key of Object.keys(baseObject)) {
        keysArray.push(key)
    }
    console.log(keysArray);
    for (const value of Object.values(baseObject)) {
        valuesArray.push(value);
    }
    console.log(valuesArray);
}
destrictObject();
console.log("**************************************************************************************************")
console.log("Дано число. Выведите в консоль количество четных цифр в этом числе.")
const randomNumber = 5237118;
const evenNumbersCount = randomNumber.toString().split('').filter((numb) => numb % 2 === 0).length;
console.log(`Количество чётных цифр в числе ${randomNumber} равно ${evenNumbersCount}`);
console.log("**************************************************************************************************")