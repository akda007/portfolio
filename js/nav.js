const nav_button = document.querySelector(".nav-bar")
const nav_content = document.querySelector(".nav-content")

nav_button.addEventListener("click", () => {
    if (nav_content.style['display'] === '') {
        nav_content.style['display'] = 'flex';
    } else {
        nav_content.style['display'] = '';
    }
});

window.addEventListener('click', (e) => {
    if (nav_button.contains(e.target)) return;
    
    if (!nav_content.contains(e.target)) {
        nav_content.style['display'] = '';
    }
});