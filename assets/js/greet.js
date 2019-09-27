//Greeting
const time = document.querySelector('#time');
const greet = document.querySelector('#greet');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');

function showTime() {

    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    // 12hr Format
    hour = hour % 12 || 12;
    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
function welcome() {
    let today = new Date(),
    hour = today.getHours();
        if(hour < 12) {
            greet.textContent = 'Good Morning';
        } else if(hour < 18) {
            greet.textContent = 'Good Afternoon';
        } else {
            greet.textContent = 'Good Evening';
        }
}


function setName(e) {
    if(e.type ===  'keypress') {
        if(e.which == 13 || e.keyCOde == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name'); 
    }

}

function setFocus(e) {
    if(e.type ===  'keypress') {
        if(e.which == 13 || e.keyCOde == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent = localStorage.getItem('focus'); 
        focus.textContent = localStorage.getItem('focus'); 
    }

}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime();
welcome();
getFocus();
getName();