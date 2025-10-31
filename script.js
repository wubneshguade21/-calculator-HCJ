const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === '.' && display.value.slice(-1) === '.') return;
    if (display.dataset.result === 'true' && !isNaN(value)) clearDisplay();
    display.value += value;
    delete display.dataset.result;
}

function clearDisplay() {
    display.value = "";
    delete display.dataset.result;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    delete display.dataset.result;
}

function calculate() {
    if (!display.value) return;
    try {
        const result = eval(display.value);
        if (!isFinite(result)) throw "Invalid";
        display.value = result;
        display.dataset.result = 'true';
    } catch (error) {
        display.value = "Error";
        display.dataset.result = 'true';
    }
}