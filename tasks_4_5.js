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
console.log("№2: Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.");
function isCeil(string4_5_2) {
    +string4_5_2 === Math.floor(+string4_5_2) ? console.log('Это целое число') : console.log('Это дробь')
}
isCeil("7.57")
console.log(
    "**************************************************************************************************"
);
console.log("№3: Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.");

function twoMaxNumber(array) {
    // const sortArray = array.toSorted((x, y) => y - x);
    // console.log(sortArray[1]);
    const [ , b, ] = array.toSorted((x, y) => y - x);
    console.log(`Втолрое по величине число массива ${array} = ${b}`)
}

twoMaxNumber([72, 16, 399, -517, 0, 777])

console.log(
    "**************************************************************************************************"
);
console.log("№4Реализуйте функцию, которая по полному имени, состоящему из имени и фамилии, возвращает инициалы");

function abbrevName(name) {
  const [firstName, secondName] = name.split(" ");
  return `${firstName[0]}.${secondName[0]}`
}

console.log(abbrevName("Mick Jagger"))