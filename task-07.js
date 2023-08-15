const textInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const changeFontSize = () => {
    const takeFontSize = textInput.value + "px";
    textSpan.style.fontSize = takeFontSize;
};

textInput.addEventListener("input", changeFontSize);