// initializing the Animate On Scroll
AOS.init();

const api = "https://type.fit/api/quotes";

const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quotesData = "";

const tweetNow = () => {

    // compose and post a tweet from a link in the webpage
    // let tweetPost = "https://twitter.com/intent/tweet";
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;

    window.open(tweetPost);

    // to add data we will use query Params

}

const randomQuotes = () => {
    let qnum = Math.floor(Math.random() * 1643);
    quotesData = realData[qnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null ? author.innerText = "Anonymous" :
        author.innerText = `${quotesData.author}`;
}

const getQuotes = async () => {

    try {
        // fetching the data and storing the response in the data
        let data = await fetch(api);
        // converting the ReadableStream to the JSON and we will get a promise as a response , also need to wait here since data is coming from somewhere
        realData = await data.json();
        randomQuotes();
    }

    catch (error) {
    }
}

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", randomQuotes);
getQuotes();

// doing this we will get a response in the console like ReadableStream as the Body
