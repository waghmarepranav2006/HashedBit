let evenNumbers = "";
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers += i + " ";
    }
}
document.getElementById("evenDisplay").innerText = evenNumbers;

function runCalculator() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let res;

    switch (op) {
        case 'add': res = a + b; break;
        case 'sub': res = a - b; break;
        case 'mul': res = a * b; break;
        case 'div': res = b !== 0 ? a / b : "Cannot divide by zero"; break;
    }
    document.getElementById("calcResult").innerText = res;
}

function calculateTax() {
    let salary = Number(document.getElementById("salary").value);
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            tax = "Invalid input";
    }
    document.getElementById("taxResult").innerText = tax;
}

function calculateSumProd() {
    let s1 = document.getElementById("n1").value;
    let s2 = document.getElementById("n2").value;

    let maxLen = Math.max(s1.length, s2.length);
    s1 = s1.padStart(maxLen, '0');
    s2 = s2.padStart(maxLen, '0');

    let sum = 0;
    for (let i = 0; i < maxLen; i++) {
        sum += Number(s1[i]) * Number(s2[i]);
    }
    document.getElementById("sumProdResult").innerText = sum;
}