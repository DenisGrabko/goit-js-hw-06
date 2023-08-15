const counterValueElem = document.querySelector('#value');

const stepDown = document.querySelector('button[data-action="decrement"]');
const stepUp = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function updateCounterValueElem() {
    counterValueElem.textContent = counterValue;
}

const decrementF = () => {
    counterValue -= 1;
    updateCounterValueElem();
};

const incrementF = () => {
    counterValue += 1;
    updateCounterValueElem();
};

stepDown.addEventListener("click", decrementF);
stepUp.addEventListener("click", incrementF);