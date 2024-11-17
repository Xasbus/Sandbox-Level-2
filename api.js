function handleClick() {
    debugger;
    const promise = fetch("https://opentdb.com/api.php?amount=1");
    promise.then(parseResponse);
}

function parseResponse(resolveValue) {
    debugger;
    const promise = resolveValue.text();
    promise.then(viewResponse);
}

function viewResponse(resolveValue) {
    debugger;
    const response = JSON.parse(resolveValue);
    const results = response.results;
    const item = results[0];
    const question = item.question;
    const correctAnswer = item.correct_answer;
    const incorrects = item.incorrect_answers;
}
// ^^ Use backticks and ${} to add variables ^^

// URL FOR CAPSTONE - VIDEO GAME TRIVIA
// https://opentdb.com/api.php?amount=3&category=15&type=multiple

function handleQuote0fTheDay() {
    debugger;
    const proxy = "https://thingproxy.freeboard.io/fetch/";
    const baseUrl = "https://faqs.com/api";
    const endpoint = "/qotd";
    const url = proxy + baseUrl + endpoint;
    const promise = fetch(url);
    promise.then(extractResponse);
}