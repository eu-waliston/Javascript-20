const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

const loader = document.getElementById('loader');



let apiQuotes = [];


function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}


function removeLoadingSpinner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


//Get Quote from API
function newQuote() {
    showLoadingSpinner();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //Check if author field is blank and replace with 'unknown'
    if (!quote.author) {
        author.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    //Check Quote length to determine the styling
    if (quote.text.length > 120) {

        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

//Get Quote from API
async function getQuote() {
    showLoadingSpinner();
    const apiUrl = ("https://type.fit/api/quotes")
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //CAtch error here
    }
}


//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

//Event Listenners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);


//On Load
getQuote();


/*
Get Quotes Locally

function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    console.log(quote);
}

newQuote();
*/

