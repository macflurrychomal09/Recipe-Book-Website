document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var recipeName = document.getElementById('recipeName').value;
    var recipeIngredients = document.getElementById('recipeIngredients').value;
    var recipeInstructions = document.getElementById('recipeInstructions').value;
  
    var recipe = {
      name: recipeName,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    };
  
    addRecipe(recipe);
    document.getElementById('recipeForm').reset();
  });
  
  function addRecipe(recipe) {
    var recipeList = document.getElementById('recipeList');
    var recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
      <h2>${recipe.name}</h2>
      <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
      <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
      <button onclick="deleteRecipe(this)">Delete</button>
    `;
    recipeList.appendChild(recipeDiv);
  }
  
  function deleteRecipe(btn) {
    var recipeDiv = btn.parentElement;
    recipeDiv.remove();
  }