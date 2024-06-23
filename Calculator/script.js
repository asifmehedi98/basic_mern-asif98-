document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');

            if (!isNaN(action) || action === 'decimal') {
                display.value += action === 'decimal' ? '.' : action;
            } else if (action === 'clear') {
                display.value = '';
            } else if (action === 'delete') {
                display.value = display.value.slice(0, -1);
            } else if (action === 'equals') {
                try {
                    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += {
                    add: '+',
                    subtract: '-',
                    multiply: '×',
                    divide: '÷'
                }[action];
            }
        });
    });
});
