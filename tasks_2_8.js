console.log("Уровень 2.8 задачника code.me");
console.log("Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.");
const defaultString2_8_1 = "deFaultStrinG";
const arrayFromDefaultString2_8_1 = [...defaultString2_8_1];
const arrayBigLettersFromDefaultString2_8_1 = arrayFromDefaultString2_8_1.filter((letters) => letters.toUpperCase() === letters)
console.log(`В строке ${defaultString2_8_1} находятся ${arrayBigLettersFromDefaultString2_8_1.length} симв.`);
console.log(
    "**************************************************************************************************"
);
console.log("Дана некоторая строка:");
console.log("1 22 333 4444 22 5555 1");
console.log(
    "Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:"
);
console.log("1 22 333 22 1");
const defaultString2_8_2 = "1 22 333 4444 22 5555 1";
const arrayDefaultString2_8_2 = defaultString2_8_2.split(" ")
const defaultString2_8_2More3 = arrayDefaultString2_8_2.filter((elem) => elem.length <= 3);
console.log(defaultString2_8_2More3.join(" "))
console.log(
    "**************************************************************************************************"
);
console.log("Даны два массива:");
console.log("let arr1 = [1, 2, 3];");
console.log("let arr2 = ['a', 'b', 'c'];");
console.log("Слейте эти массивы в новый массив следующим образом:");
console.log("[1, 2, 'a', 'b', 'c', 3]");
const arr1_2_8 = [1, 2, 3];
const arr2_2_8 = ['a', 'b', 'c'];
const resumeArray2_8 = (arr1_2_8.slice(0, 2).concat(arr2_2_8)).concat(arr1_2_8[arr1_2_8.length - 1]);
console.log(resumeArray2_8);
