function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteDigit() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById("display");
    display.value += operator;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value) || "0"; // Safe evaluation
    } catch {
        display.value = "Error";
    }
}
