document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            handleButtonClick(action);
        });
    });

    function handleButtonClick(action) {
        if (!isNaN(action) || action === 'decimal') {
            appendToDisplay(action === 'decimal' ? '.' : action);
        } else if (action === 'clear') {
            clearDisplay();
        } else if (action === 'delete') {
            deleteLastCharacter();
        } else if (action === 'equals') {
            calculateResult();
        } else if (action === 'sqrt') {
            calculateSquareRoot();
        } else if (action === 'square') {
            calculateSquare();
        } else {
            appendOperatorToDisplay(action);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastCharacter() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
        } catch (e) {
            display.value = 'Error';
        }
    }

    function calculateSquareRoot() {
        try {
            display.value = Math.sqrt(eval(display.value));
        } catch (e) {
            display.value = 'Error';
        }
    }

    function calculateSquare() {
        try {
            display.value = Math.pow(eval(display.value), 2);
        } catch (e) {
            display.value = 'Error';
        }
    }

    function appendOperatorToDisplay(action) {
        display.value += {
            add: '+',
            subtract: '-',
            multiply: '×',
            divide: '÷'
        }[action];
    }
});
