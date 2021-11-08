
// Timer will Begin Onclick
var time = 100
var interval = setInterval(function () { }, 1000 )
    document.getElementById('time');
    time--;
    if(time === 0){
        clearInterval(interval);
        document.getElementById('time').textContent='Done';
    }
}

// Declare Constants for Quiz
const questions = document.querySelector('#question');
const options = Array.from(document.querySelectorAll(.option-text);
// remember to add score text section to html

let 