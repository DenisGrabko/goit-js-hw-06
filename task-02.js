const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsId = document.querySelector('#ingredients');

ingredients.forEach((element) => { 
    const liEl = document.createElement("li");
    liEl.classList = "item"; 
    liEl.textContent = element;
    ingredientsId.appendChild(liEl);
}
    );
