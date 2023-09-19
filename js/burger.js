const menuBtn = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.navlist');
const link = document.querySelectorAll('.navlist-item');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('navlist--active');  
});

//САМ СДЕЛАЛ!!!!
document.querySelectorAll('.navlist-item').forEach(el => {
    el.addEventListener('click', function () {
        menu.classList.toggle('navlist--active');
    });
});