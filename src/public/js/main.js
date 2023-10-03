var image = document.querySelector('#sig_lamp-off');

function onLamp() {
    image.src = '/img/lamp_on.png';
}

function offLamp() {
    image.src = '/img/lamp_off.png';
}