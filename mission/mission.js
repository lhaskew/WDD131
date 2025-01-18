const themeSelector = document.querySelector('#theme-select');

function selectTheme() {
    console.log('Theme change detected');
    console.log('Selected theme:', themeSelector.value);

    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'byui-logo_white.webp';
        console.log('Dark theme applied');
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
        console.log('Light theme applied');
    }
}

themeSelector.addEventListener('change', selectTheme);
