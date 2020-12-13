const menuIcon = document.querySelector('.toggleMobile')
const navbar = document.querySelector('.small-menu')


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});