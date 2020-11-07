var options = {
    type: "basic",
    title: "My First Notif",
    message: "Time to Take a Break",
    iconUrl: "logo2.png"
};

/* 
chrome.notifications.create(options, callback);
console.log('POP');

function callback(){
    console.log('Popup Done!');
    }
*/


//Timer Function: 
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown')

let a = setInterval(updateCountdown, 1000);

function updateCountdown() {
    
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (countdownEl.innerHTML == '0:00') {
        clearInterval(a)
        chrome.notifications.create(options, callback);
            console.log('POP');

        function callback(){
            console.log('Popup Done!');
        }
    }
}
