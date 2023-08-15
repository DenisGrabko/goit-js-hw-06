function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  
  document.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelector('#controls');
    const boxesContainer = document.querySelector('#boxes');
  
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');
    const input = controls.querySelector('input');
  
    createButton.addEventListener('click', createBoxes);
    destroyButton.addEventListener('click', destroyBoxes);
  
    function createBoxes() {
      const amount = Number(input.value);
  
      if (isNaN(amount) || amount < 1 || amount > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
      }
  
      const fragment = document.createDocumentFragment();
  
      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
  
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = color;
  
        fragment.appendChild(box);
      }
  
      boxesContainer.appendChild(fragment);
    }
  
    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
  });