console.log("№1 Разворот строки");

function reverseString(string) {
    console.log([...string].reverse().join(""));
}

reverseString("maxcode.dev");
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
