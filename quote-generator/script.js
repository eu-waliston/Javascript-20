let apiQuotes = [];

//Show New Quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    console.log(quote);
}

//Get Quote from API
async function getQuote() {
    const apiUrl = ("https://type.fit/api/quotes")
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //CAtch error here
    }
}

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

