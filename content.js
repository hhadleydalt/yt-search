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
            const container = document.createElement("div")
            container.className = "style-scope ytd-watch-metadata prompt"
            container.style.backgroundColor = "white"
            container.style.borderRadius = "1.75rem"
            container.style.padding = "0.5rem"
            container.style.marginTop = "1rem"
            container.style.marginBottom = "1rem"
            container.style.border = "1px solid rgba(100, 100, 100)"
            container.style.filter = "drop-shadow(0rem 0.5rem 0rem rgba(100, 100, 100))"
            container.style.color = "rgba(100, 100, 100)"
            container.style.display = "flex"
            container.style.flexDirection = "row"
            container.style.alignItems = "center"

            const prompt = document.createElement("h2")
            prompt.innerText = "Search this video"
            prompt.style.marginLeft = "1rem"

            const logoBg = document.createElement("div")
            logoBg.style.width = "2.5rem"
            logoBg.style.height = "2.5rem"
            logoBg.style.borderRadius = "2.5rem"
            logoBg.style.marginLeft = "0.5rem"
            logoBg.style.backgroundColor = "rgba(100, 100, 100)"
            logoBg.style.display = "flex"
            logoBg.style.alignItems = "center"
            logoBg.style.justifyContent = "center"
            container.appendChild(logoBg)
            container.appendChild(prompt)

            const logoIcon = document.createElement("img")
            logoIcon.src = chrome.runtime.getURL("images/magnifying-glass.png")
            logoIcon.style.width = "1.35rem"
            logoBg.appendChild(logoIcon)

            title = document.querySelector("#title.style-scope.ytd-watch-metadata")
            title.appendChild(container)
        }
    }
    newVideoLoaded()
})()
