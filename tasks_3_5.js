console.log("Уровень 3.5 задачника code.me");
console.log("Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.");
const sentens3_5_1 = "Актуальная информация о арбузах";
const noAletterSentens = sentens3_5_1.split(" ").filter((word) => word[0].toLowerCase() === "а")
console.log(noAletterSentens);
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.");
const array3_5_2 = [23, 30, 17, 75];
console.log(array3_5_2.filter((numb) => numb % 5 === 0));
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.");
const numbersArray3_5_3 = [82, 12, 305, 0.3, 70, 5];
const numbersArrayZeros3_5_3 = numbersArray3_5_3.filter((el) => el.toString().includes("0"));
console.log(numbersArrayZeros3_5_3);
console.log(
    "**************************************************************************************************"
);
console.log("Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.");
const numbersArrayThree3_5_4 = numbersArray3_5_3.filter((el) => el.toString().includes("3"));
if (numbersArrayThree3_5_4.length) {
    console.log(`В массиве ${numbersArray3_5_3} есть числа, содержащие цифру 3 - это ${numbersArrayThree3_5_4.join(" ")}`);
}
