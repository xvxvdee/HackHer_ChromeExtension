// Notification 1
var options = {
    type: "basic",
    title: "Stay Healthy",
    message: "Let's take a short break!",
    iconUrl: "logo2.png"
};

// Notification 2
var options2 = {
    type: "basic",
    title: "Stay Healthy",
    message: "Would you like to continue working?",
    iconUrl: "logo2.png",
    buttons: [
        { title: "Yes" },
        { title: "No" }
    ]
};

function callback(){
    console.log('Popup Done!');
}

function TIMER() {
    // 20 MINUTE WORKING TIME Function:
    const startingMinutes = 1;
    let time = startingMinutes * 60; // 1 minute * 60 seconds
    const countdownEl = document.getElementById('countdown')
    let a = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
        if (countdownEl.innerHTML == '00:00') {
            clearInterval(a)
            chrome.notifications.create(options, callback);
            
            // BREAKTIME FUNCTION HERE: 
            const startingSeconds = 20;
            let time = startingSeconds; // 1 minute * 60 seconds
            const countdownEl = document.getElementById('countdown')
            let b = setInterval(updateBreaktime, 1000);

            function updateBreaktime() {
                let minutes = Math.floor(time/60);
                let seconds = time % 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;
                minutes = minutes < 10 ? '0' + minutes : minutes;

                countdownEl.innerHTML = `${minutes}:${seconds}`;
                time--;
                if (countdownEl.innerHTML == '00:00') {
                    clearInterval(b)
                    // Calls the second Notification: Asks if you'd like to continue working
                    chrome.notifications.create(options2, callback);
                }   
            }
        }
    }
}

// Calling the function: 
TIMER()
