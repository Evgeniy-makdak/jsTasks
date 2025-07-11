console.log("Уровень 2.3 задачника code.me");
console.log("Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.");
const frise = "Подъём умысли";
const arrayFrase = frise.split(" ");
if (arrayFrase[0].slice(-1).toLocaleLowerCase() === arrayFrase[1].slice(0, 1).toLocaleLowerCase()) {
    console.log(`Последняя буква слова "${arrayFrase[0]}" соовпадает с первой буквой слова "${arrayFrase[1]}" без учёта регистра`);
} else console.log(`Последняя буква слова "${arrayFrase[0]}" не соовпадает с первой буквой слова "${arrayFrase[1]}"`);
