const counterDom = document.getElementById('counter');
const increaseDom = document.getElementById('increase');
const decreaseDom = document.getElementById('decrease');
let counter = 0;
counterDom.innerHTML = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0

increaseDom.addEventListener('click',  clickEvent);
decreaseDom.addEventListener('click', clickEvent);

function clickEvent() {
    this.id === 'increase'? counterDom.innerHTML = counter += 1: counterDom.innerHTML= counter -=1 ;
    localStorage.setItem('counter', counter  )

};


