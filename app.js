const navUl = document.querySelector('.navigation__list');
const navToggle = document.getElementById('navi-toggle');

navUl.addEventListener('click', () => {
    navToggle.checked = navToggle.checked ? false : true;
})