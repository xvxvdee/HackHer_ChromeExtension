var options = {
    type: "basic",
    title: "Stay Healthy",
    message: "Time to Take a Break",
    iconUrl: "logo2.png"
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
        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
        if (countdownEl.innerHTML == '0:00') {
            clearInterval(a)
            chrome.notifications.create(options, callback);
            
            // BREAKTIME FUNCTION HERE: 
            const startingSeconds = 20;
            let time = startingSeconds; // 1 minute * 60 seconds
            const countdownEl = document.getElementById('countdown')
            let b = setInterval(updateBreaktime, 1000);

            function updateBreaktime() {
                const minutes = Math.floor(time/60);
                let seconds = time % 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;

                countdownEl.innerHTML = `${minutes}:${seconds}`;
                time--;
                if (countdownEl.innerHTML == '0:00') {
                    clearInterval(b)
                    chrome.notifications.create(options, callback);
                }   
            }
        }
    }
}

//Calling the Function
TIMER()
