// Select the theme selector dropdown element from the DOM
const themeSelector = document.querySelector('#theme-select');

// Define the changeTheme function that will change the theme
function changeTheme() {
    // Check the current value of the select dropdown
    if (themeSelector.value === 'dark') {
        // Add the 'dark' class to the body
        document.body.classList.add('dark');
        // Change the logo source to the white logo
        document.querySelector('.logo').src = 'byui-logo_white.webp';
    } else {
        // Remove the 'dark' class from the body
        document.body.classList.remove('dark');
        // Change the logo source back to the blue logo
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
}

// Add an event listener to the themeSelector element to trigger changeTheme on change
themeSelector.addEventListener('change', changeTheme);
