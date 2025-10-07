console.log("Уровень 4.3 задачника code.me");
console.log("№1: Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.");
const noDubles = (array) => {
    return new Set(array)
}
console.log([...noDubles([3, 7, 3, 'a', 'this', 'a'])])
console.log(
    "**************************************************************************************************"
);
console.log("№2: Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.");

function no3Doubles(arr) {
    // Подсчитываем количество вхождений
    const countMap = {};
    for (let element of arr) {
        countMap[element] = (countMap[element] || 0) + 1;
    }
    
    // Фильтруем массив
    return arr.filter(element => countMap[element] <= 3);
}

const array4_3_2 = [3, 7, 3, 'a', 'this', 'a', 'a', 'store', 77, "", 'store', 0.77, 'store', 'store', 3, "77", "77"];
console.log("Результат:", no3Doubles(array4_3_2));
console.log(
    "**************************************************************************************************"
);
console.log("№3: Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.");
const mutateArray4_3_3 = [];
function deleteDoubles() {
    for (let i = 0; i < array4_3_2.length; i++) {
        if (array4_3_2[i] !== array4_3_2[i + 1]) {
            mutateArray4_3_3.push(array4_3_2[i]);
        };
    };
    return mutateArray4_3_3;
};

console.log(deleteDoubles());