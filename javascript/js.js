const menu = document.querySelector('.barra-lateral');
const Button = document.querySelector('#button');
const ipad = window.matchMedia('screen and (max-width: 600px)');

ipad.addListener(validation);

function validation(event) {
    if (event.matches) {
        Button.addEventListener('click', hideShow);
    } else {
        Button.removeEventListener('click', hideShow);
    }
    console.log(event.matches);
}

validation(ipad);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}