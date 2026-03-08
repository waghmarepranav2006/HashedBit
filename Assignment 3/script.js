const states = [
    "Andhra Pradesh", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const filteredStates = states.filter(state => {
    const firstLetter = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});
document.getElementById("statesOutput").innerText = filteredStates.join(", ");

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
document.getElementById("reverseOutput").innerText = reversedStr;

let string = 'INDIA';
let arr = string.split(''); 
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A'); 
document.getElementById("spliceOutput").innerText = arr.join('');

function countChars() {
    let text = document.getElementById("strInput").value;
    if (text.length < 20) {
        document.getElementById("counterResult").innerText = "Please enter at least 20 characters.";
        return;
    }

    let vowels = 0;
    let consonants = 0;
    const vowelList = "aeiouAEIOU";

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) { 
            if (vowelList.includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    document.getElementById("counterResult").innerText = `Vowels: ${vowels}, Consonants: ${consonants}`;
}