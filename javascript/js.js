const menu = document.querySelector('.barra-lateral');
const Button = document.querySelector('#button');
const mobile = window.matchMedia('screen and (max-width: 2000px)');

mobile.addListener(validation);

function validation(event) {
    if (event.matches) {
        Button.addEventListener('click', hideShow);
    } else {
        Button.removeEventListener('click', hideShow);
    }
    console.log(event.matches);
}

validation(mobile);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}
