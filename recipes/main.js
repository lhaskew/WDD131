import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span class="icon-star">⭐</span>` : `<span class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" class="recipe-image" />
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById("recipe-list");
    if (!recipeContainer) {
        console.error("Element with ID 'recipe-list' not found.");
        return;
    }
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    if (!searchInput) {
        console.error("Search input not found.");
        return;
    }
    const query = searchInput.value.trim();
    if (query) {
        renderRecipes(filterRecipes(query));
    } else {
        init();
    }
}

init();

const searchButton = document.getElementById("search-button");
if (searchButton) {
    searchButton.addEventListener("click", searchHandler);
} else {
    console.error("Search button not found.");
}
