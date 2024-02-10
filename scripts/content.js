(() => {
    let currentVideo = ""
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj

        if (type === "NEW") {
            currentVideo = videoId
            newVideoLoaded()
        }
    })
})()

/*const article = document.querySelector("article");
//const vid = document.querySelector("ytd-watch-flexy")

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);


  const myBadge = document.createElement("p");
  myBadge.textContent = `⏱️ HELLO`;
  const myHeading = article.querySelector("h1");
  const myDate = article.querySelector("time")?.parentNode;

  (myDate ?? myHeading).insertAdjacentElement("afterend", myBadge);



  /*const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge); */
/*}

const hi = document.querySelectorAll("h1")
if (hi.length > 0) {
    console.log("YA")
} else {
    console.log("Naur")
}

      // Use document.querySelector to select the video iframe
      /*const titleElement = document.querySelector('.title.style-scope.ytd-video-primary-info-renderer');

            if (titleElement) {
                // Create a new element to insert below the title
                const newElement = document.createElement('div');
                newElement.textContent = 'Your additional content goes here';

                // Insert the new element below the title
                titleElement.parentNode.insertBefore(newElement, titleElement.nextSibling);
            } else {
                console.error('Unable to find the YouTube video title element.');
            } */

            /*const titleElement = document.querySelector('h1.title');

            if (titleElement) {
                console.log("found one")
                // Create a new element to insert below the title
                const newElement = document.createElement('div');
                newElement.textContent = 'Your additional content goes here';

                // Insert the new element below the title
                titleElement.parentNode.insertBefore(newElement, titleElement.nextSibling);
            } else {
                console.error('Unable to find the YouTube video title element.');
            } 

    /*const myBadge = document.createElement("p");
    myBadge.textContent = `⏱️ HELLO`;
    const header = document.getElementById("masthead-container");
    if (header) {
        console.log("HELLO")
    } 

    header.insertAdjacentElement("afterend", myBadge);  */
