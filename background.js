console.log("BACKGROUND");
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
        { title: "Reset Timer" }
    ]
};

function callback(){
    console.log('Popup Done!');
}
function BtnClick(){
    TIMER()
  
}
function TIMER() {
    // 20 MINUTE WORKING TIME Function:
    const startingMinutes = 5;
    let time = startingMinutes; // 1 minute * 60 seconds
    let timeNow;
    // const countdownEl = document.getElementById('countdown')
    let a = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timeNow = minutes.toString()+":"+seconds.toString();
        time--;
        if (timeNow == '0:00') {
            clearInterval(a)
            chrome.notifications.create(options, callback);
            
            // BREAKTIME FUNCTION HERE: 
            const startingSeconds = 2;
            let time = startingSeconds; // 1 minute * 60 seconds
            // const countdownEl = document.getElementById('countdown');
            let b = setInterval(updateBreaktime, 1000);

            function updateBreaktime() {
                const minutes = Math.floor(time/60);
                let seconds = time % 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;

                timeNow = minutes.toString()+":"+seconds.toString();
                time--;
                if (timeNow == '0:00') {
                    clearInterval(b)
                    // Calls the second Notification: Asks if you'd like to continue working
                    chrome.notifications.create(options2, callback);
                    chrome.notifications.onButtonClicked.addListener(BtnClick);

                }   
            }
        }
    }
}

// Calling the function: 
TIMER()

