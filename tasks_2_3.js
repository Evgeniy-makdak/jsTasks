console.log("Уровень 2.3 задачника code.me");
console.log("Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.");
const frise = "Подъём умысли";
const arrayFrase = frise.split(" ");
if (arrayFrase[0].slice(-1).toLocaleLowerCase() === arrayFrase[1].slice(0, 1).toLocaleLowerCase()) {
    console.log(`Последняя буква слова "${arrayFrase[0]}" соовпадает с первой буквой слова "${arrayFrase[1]}" без учёта регистра`);
} else console.log(`Последняя буква слова "${arrayFrase[0]}" не соовпадает с первой буквой слова "${arrayFrase[1]}"`);
console.log("**************************************************************************************************")
console.log("Дана некоторая строка. Найдите позицию третьего нуля в строке.");
const stringWithZero = "0350021030708010";
const arrayFromStringWithZero = stringWithZero.split("");
let count = 0;
let index = 0;
for (let i = 0; i < arrayFromStringWithZero.length; i++) {
    if (arrayFromStringWithZero[i] === "0") {
        count += 1;
        if (count <= 3) {
            index = i;
        }
    }
}
console.log(`Позиция третьего нуля в строке ${stringWithZero}: ${index + 1}`);
console.log("**************************************************************************************************")
console.log("Даны числа, разделенные запятыми:");
console.log("12,34,56");
console.log("Найдите сумму этих чисел.");
const stringOfNumbers = "12, 34, 56";