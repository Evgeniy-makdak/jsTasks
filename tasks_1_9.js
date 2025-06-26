console.log("Уровень 1.9 задачника code.me");
console.log('Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.');
const httpString = ['ya.com', 'http://coshca.it', 'http://yahoo.com', 'http:/mail.uk', 'code.html', 'h.html', 'y.html.'];
const newHttpString = [];
for (let i = 0; i < httpString.length; i++) {
    if (httpString[i].length >= 6 && httpString[i].slice(0, 7) === 'http://') {
        newHttpString.push(httpString[i])
    }
}
console.log(newHttpString);
console.log('Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.');
const htmlStringArray = []
for (let i = 0; i < httpString.length; i++) {
    if (httpString[i].length >= 5 && httpString[i].slice(-5, httpString[i].length) === '.html') {
        htmlStringArray.push(httpString[i])
    }
}
console.log(htmlStringArray);
console.log('Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.');
const slowArray = [12, 8, 11, 25];
const tenArray = slowArray.map((namber) => {
    return +(namber * 1.1).toFixed(2)
});
console.log(tenArray);
