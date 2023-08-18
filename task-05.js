const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

const funcForOutput = (event => {
    outputField.textContent = event.currentTarget.value;
    if(event.currentTarget.value === "") {
        outputField.textContent = "Anonymous";
    }
})

inputField.addEventListener("input", funcForOutput);