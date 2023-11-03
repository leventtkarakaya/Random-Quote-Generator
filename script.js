const btnEl = document.getElementById("btn");
const spanEl = document.getElementById("quote");
const autohrEl = document.getElementById("author");

const apiUrl = "http://api.quotable.io/random";

async function getQuote() {
    try {
        autohrEl.innerText = `Updating...`;
        spanEl.innerText = `Updating...`;
        btnEl.innerText = `Loading...`;
        btnEl.disabled = true;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const quoteContenet = data.content;
        const authorContent = data.author;
        autohrEl.innerText = "~ " + authorContent;
        spanEl.innerText = quoteContenet;
        btnEl.innerText = `Get a Quote`;
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        autohrEl.innerText = `An error happened, try again later`;
        spanEl.innerText = "An error happened";
        btnEl.innerText = `Get a Quote`;
        btnEl.disabled = false;
    }
}
getQuote();
btnEl.addEventListener("click", getQuote);
