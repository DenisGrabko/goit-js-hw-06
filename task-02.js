const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsId = document.querySelector('#ingredients');
  const fragment = document.createDocumentFragment();

    ingredients.forEach((element) => { 
    const liEl = document.createElement("li");
    liEl.classList = "item"; 
    liEl.textContent = element;
    fragment.appendChild(liEl);
});
ingredientsId.appendChild(fragment);






   
