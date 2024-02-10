//console.log("background.js working")
chrome.tabs.onUpdated.addListener((tabId, tab) => {

    chrome.tabs.get(tabId, (currentTab) => {
        //console.log("Tab URL: " + currentTab.url);

        if (currentTab.url.includes("youtube.com/watch")) {
            //console.log("youtube video detected!")
            const queryParameters = currentTab.url.split("?")[1]
            const urlParameters = new URLSearchParams(queryParameters)
            //console.log(urlParameters)
    
            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                videoId: urlParameters.get("v")
            })
        }
    });
})
