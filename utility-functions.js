function display(message) {
    debugger;
    document.write(message);
}

function output(message) {
    outputTag.innerHTML += message;
}







function ask(message) {
    const userText = prompt(message);
    const userNumber = Number(userText);
    const isNotNumber = isNaN(userNumber);
    if (isNotNumber) {
        return userText;
    } else {
        return userNumber;
    }
}

function cardConverter(cardObject) {
    let cardString = `<div class="card">
  <img class="card-img-top" src="${cardObject.src}">
  <div class="card-body">
  <h3 class="card-title">${cardObject.title}</h3>
  ${cardObject.summary}
  </div>
  </div>`
    return cardString;
}