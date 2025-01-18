const themeSelector = document.querySelector('#theme-select');

function selectTheme() {
    console.log('Theme change detected');
    console.log('Selected theme:', themeSelector.value);

    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        document.querySelector('.logo').src = 'byui-logo_white.webp';
        console.log('Dark theme applied');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
        console.log('Light theme applied');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'byui-logo_white.webp';
    } else {
        document.body.classList.add('light');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
});

themeSelector.addEventListener('change', selectTheme);
