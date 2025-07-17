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
// const firstNumber = randomString.indexOf(filter((el) => el.charCodeAt() >= 48 && el.charCodeAt() <= 57))
// console.log(firstNumber);
