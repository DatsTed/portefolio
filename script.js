const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
}

function toggleDarkMode() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

const darkModeToggle = document.getElementById('dark-mode-switch');
darkModeToggle.addEventListener('change', toggleDarkMode);

if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true;
} else {
    disableDarkMode();
}