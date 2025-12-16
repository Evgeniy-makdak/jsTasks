console.log("Уровень 4.5 задачника code.me");
console.log("№1: Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр.");
const string = '31500t1';

function isThatNumbers(string) {
    const allDigits = [...string].every((char) => {
        const code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
    });
    
    if (allDigits) {
        console.log(`Строка "${string}" - это число!`);
    } else {
        console.log(`В строке "${string}" есть не числовые символы.`);
    }
}

isThatNumbers(string);
console.log(
    "**************************************************************************************************"
);