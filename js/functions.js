/*
*   QuoteGeneratorJS v1.0
*   Thomas Naylor
*
*   Demonstration of an API call and updating the DOM using Ajax in plain JavaScript
*   API: https://talaikis.com/api/quotes/random/
*/

// ajax call to api to get a random quote
// the api will return one quote at a time.
function getRandomQuote() {
  var apiCall = 'https://talaikis.com/api/quotes/random/'

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var request = JSON.parse(this.response);
     update(request);
    }
  };

  xhttp.open("GET", apiCall, true);
  xhttp.send();
}

// handles the DOM updates
function update(response) {
  // get the DOM elements
  var quoteText = document.getElementById('quote__text');
  var authorText = document.getElementById('author__text');
  var twitterShare = document.getElementById('twitter');

  // update the DOM elements with quote text from API response
  quoteText.innerHTML = response.quote;
  authorText.innerHTML = response.author;

  // twitter link update
  var twitterQuote = quoteText.innerHTML
  var twitterAuthor = authorText.innerHTML
  var twitterLink = 'http://www.twitter.com/share?&text='

  twitterLink = twitterLink + twitterQuote.split(' ').join('+');
  twitterShare.href = twitterLink;
}

// click event listener to update text
function createEventListener() {
  var nextQuote = document.getElementById('next__button');

  if(nextQuote.addEventListener) {
    nextQuote.addEventListener('click', getRandomQuote, false);
  }
}

// initialize the DOM with relevant functions
function init() {
  getRandomQuote();
}

// create event listeners when document loads
if(window.addEventListener) {
  window.addEventListener('load', createEventListener, false);
}

init();

/* game-over :) */
