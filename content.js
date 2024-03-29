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

            let searchIcon

            const title = document.querySelector("#title.style-scope.ytd-watch-metadata")
            const titleColor = window.getComputedStyle(title).getPropertyValue('color');

            let total = 0
            const arr = titleColor.split(",")

            arr.forEach((str) => {
                str = str.replace(/\D/g,'')
                total += parseInt(str)
            })

            total /= 3
            
            if (total < 128) {
                searchIcon = "images/magnifying-glass.png"
            } else {
                searchIcon = "images/magnifying-glass-black.png"
            }


            const container = document.createElement("div")
            container.className = "style-scope ytd-watch-metadata prompt"
            container.style.backgroundColor = "transparent"
            container.style.borderRadius = "1.75rem"
            container.style.padding = "0.5rem"
            container.style.marginTop = "1rem"
            container.style.marginBottom = "1rem"
            container.style.border = "1px solid " + titleColor
            container.style.borderBottom = "0.45rem solid " + titleColor
            container.style.color = titleColor
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
            logoBg.style.backgroundColor = titleColor
            logoBg.style.display = "flex"
            logoBg.style.alignItems = "center"
            logoBg.style.justifyContent = "center"
            container.appendChild(logoBg)
            container.appendChild(prompt)

            const logoIcon = document.createElement("img")
            logoIcon.src = chrome.runtime.getURL(searchIcon)
            logoIcon.style.width = "1.35rem"
            logoBg.appendChild(logoIcon)

            title.appendChild(container)
        }
    }
    newVideoLoaded()
})()
