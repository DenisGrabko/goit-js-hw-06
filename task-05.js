const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

const funcForOutput = (event => {
    outputField.textContent = event.currentTarget.value;
})

inputField.addEventListener("input", funcForOutput);