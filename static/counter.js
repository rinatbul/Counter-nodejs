const incButton = document.querySelector("#incButton");
const resetButton = document.querySelector('#resetButton')
const input = document.querySelector('.counter-input');

let count = 0;
input.value = count;
resetButton.disabled = true;

incButton.addEventListener('click', () => {
    resetButton.disabled = false;
    count < 10 ? count++ : null;
    input.value = count;
    if (count === 10) {
        incButton.disabled = true;
        input.className = 'red-counter-input';
    }
})

resetButton.addEventListener('click', () => {
    count = 0;
    input.value = count;
    resetButton.disabled = true;
    incButton.disabled = false;
    input.className = 'counter-input';
})