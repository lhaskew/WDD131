document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipe-list");

    const recipe = {
        name: "Apple Crisp",
        image: "images/apple-crisp.jpg",
        tags: ["dessert", "tag2"],
        rating: 4,
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    };

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-details">
            <div class="tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h2 class="recipe-title">${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
            </span>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    `;

    recipeList.appendChild(recipeCard);
});
