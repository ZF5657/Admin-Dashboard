// script for collapse and expand of side menu
const minBtn = document.querySelector('#minimize');
const expBtn = document.querySelector('#expand');
const barBtns = document.querySelectorAll('.colBtn');
const colBar = document.querySelector('.collapse')
const sideInner = document.querySelector('.side-inner');
const container = document.querySelector('.container');
const sideBar = document.querySelector('.side');
let visBtn = true;

barBtns.forEach((button) => button.addEventListener('click', () => {
    if(visBtn == true) {
        sideInner.style = ('display: none;')
        container.style = ('grid-template-columns: 2% 1fr;')
        sideBar.style = ('grid-template-columns: 1fr;')
        minBtn.style = ('visibility: hidden;')
        expBtn.style = ('visibility: visible;')
        document.querySelector('.search').style = ('width: 40%; height: 45%; margin-right: 42.2%;')
        document.querySelector('.welcome').style = ('margin-right: 63%;')
        visBtn = false;
    }
    else if(visBtn == false) {
        sideInner.style = ('display: block;')
        container.style = ('grid-template-columns: 15% 1fr;')
        sideBar.style = ('grid-template-columns: 90% 1fr;')
        minBtn.style = ('visibility: visible;')
        expBtn.style = ('visibility: hidden;')
        document.querySelector('.search').style = ('width: 50%; height: 40%; margin-right: 30%;')
        document.querySelector('.welcome').style = ('margin-right: 58%;')
        visBtn = true;
    }
}));