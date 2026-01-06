console.log("№1 Разворот строки");

function reverseString(string) {
  console.log([...string].reverse().join(""));
}

reverseString("maxcode.dev");
// 30 секунд;
console.log(
  "**************************************************************************************************"
);
console.log("№3 Панграмма");

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerSentence = sentence.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerSentence.includes(alphabet[i])) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over he lazy dog"));
// Приблизительно 3 минуты;
console.log(
  "**************************************************************************************************"
);
console.log("№2 Top Words");

const words = [
  "a",
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "act",
  "active",
  "actual",
  "add",
  "address",
  "Admit",
  "Advertise",
  "Affect",
  "AFFORD",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "agent",
  "ago",
  "agree",
];
function topWords(words, query, limit) {
  const resWords = [];
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].toLowerCase().includes(query.toLowerCase()) &&
      words[i][0].toLowerCase() === query[0].toLowerCase()
    ) {
      resWords.push(words[i]);
    }
  }
  return resWords.splice(0, limit);
}

console.log(topWords(words, "Af", 3).join(","));
console.log(topWords(words, "aga", 5).join(","));
console.log(topWords(words, "b", 2).join(","));

// Около 4 минут;
console.log(
  "**************************************************************************************************"
);
console.log("№4 Функция every");
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    if (!result) return false;
  }
  return true;
}

console.log(every(["a", "b", "c", "d"], (x, i) => x.length >= i));
console.log(
  "**************************************************************************************************"
);
// console.log("№4 Функция every");