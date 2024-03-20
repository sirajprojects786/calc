document.addEventListener('keydown', function(event) {
    var key = event.key;

    if (/[0-9\.\+\-\*\/]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function appendToDisplay(value) {
    var display = document.getElementById('display');

    // Handle multiplication sign
    if (value === '*') {
        value = ' * ';
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        // Use eval with spaces around operators to avoid conflicts
        display.value = eval(display.value.replace(/(\d)([\/*\-\+])/g, '$1 $2'));
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}