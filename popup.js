function notification() {
    chrome.notitications.create(
        {
            title: 'title',
            message: 'Time to take a break!',
            iconUrl: 'logo2.png',
            type: 'basic'
        }
    )
}
