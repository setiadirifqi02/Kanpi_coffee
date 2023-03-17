import './style/css/main.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss';


const selectElement = function (element) {
    return document.querySelector(element);
}
let menuToggle = selectElement('.hamburger-menu');
let navBarLeft = selectElement('.navbar-left');
let navBarRight = selectElement('.navbar-right');


// menuToggle.addEventListener('click', function () {
//     
// })

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    navBarLeft.classList.toggle('open');
    navBarRight.classList.toggle('open');
})

