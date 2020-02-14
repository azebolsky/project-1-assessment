/*----- app's state (variables) -----*/
let total;

/*----- cached element references -----*/
const outputValue = document.getElementById('output-val');
const inputValue = document.getElementById('input-val');

/*----- event listeners -----*/
document.getElementById('add-btn').addEventListener('click', plusButtonClick);
document.getElementById('minus-btn').addEventListener('click', minusButtonClick);

/*----- functions -----*/
init();

function init() {
    inputValue.setAttribute('value', 1);
    total = 0;
    render();
}

function render() {
    outputValue.innerHTML = total;
    total < 0 ? outputValue.style.color = 'red' : outputValue.style.color = 'black';
}

function plusButtonClick() {
    let firstAmountToAdd = parseInt(inputValue.value);
    let secondAmountToAdd = parseInt(outputValue.innerHTML);
    total = firstAmountToAdd + secondAmountToAdd;
    render();
}

function minusButtonClick() {
    let firstAmountToSubtract = parseInt(inputValue.value);
    let secondAmountToSubtract = parseInt(outputValue.innerHTML);
    total = secondAmountToSubtract - firstAmountToSubtract;
    render();
}