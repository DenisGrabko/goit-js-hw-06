const textInput = document.querySelector("#validation-input");
const lineLengthTemplate = parseInt(textInput.getAttribute('data-length'));


const funcCheckLength = () => {
    textInput.classList.remove('valid', 'invalid');
    if (textInput.value.length === lineLengthTemplate) {
        textInput.classList.add('valid');}
    else {textInput.classList.add('invalid');}
    
}

textInput.addEventListener("blur", funcCheckLength);