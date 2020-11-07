var options = {
    type: "basic",
    title: "My First Notif",
    message: "Time to Take a Break",
    iconUrl: "logo2.png"
};

chrome.notifications.create(options, callback);
console.log('POP');

function callback(){
    console.log('Popup Done!');
    }
