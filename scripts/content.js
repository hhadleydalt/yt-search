(() => {
    let currentVideo = ""
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        //console.log("listener listening")
        const { type, value, videoId } = obj

        if (type === "NEW") {
            currentVideo = videoId
            newVideoLoaded()
        }
    })

    const newVideoLoaded = async () => {

        const promptExists = document.getElementsByClassName("prompt")[0]

        if (!promptExists) {
            const prompt = document.createElement("h1")
            prompt.className = "style-scope ytd-watch-metadata prompt"
            prompt.innerText = "𝒾 𝓁𝒾𝓀𝑒 𝓅𝑜𝑜𝓅 💩"
            prompt.style.color = "pink"

            title = document.querySelector("#title.style-scope.ytd-watch-metadata")
            title.appendChild(prompt)
        }
    }
    newVideoLoaded()
})()
