let quoteContainer = document.querySelector(".quote"),
    randomNumber = Math.floor(Math.random() * 10),
    xhr = new XMLHttpRequest();

xhr.open("GET", "https://quote-garden.herokuapp.com/api/v3/quotes", true);
const loadAPI = () => {
    let responseString = xhr.responseText,
        responseObject = JSON.parse(responseString),
        randomQuote = responseObject.data[randomNumber],
        quoteText = randomQuote.quoteText,
        quoteAuthor = randomQuote.quoteAuthor;

    /* Quote in HTML */
    quoteContainer.innerHTML = `
            <p class="quote-text">${quoteText}</p>
            <p class="quote-author">${quoteAuthor}</p>
        `;
    console.log(randomNumber);
};

xhr.send();
xhr.addEventListener("load", loadAPI);