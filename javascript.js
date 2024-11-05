function display(message) {
  document.write(message);
}

function greeting() {
  display("Welcome To The Page!");
}

function myFunction(callbackFunction) {
  callbackFunction();
}

function activator() {
  myFunction(greeting);
}

function delayGreeting() {
  setTimeout(greeting, 5000);
}

function asynchronous() {
  setTimeout(greeting, 5000);
  display("Waitng for the greeting.....");
}

function submitForm() {}

function serverResponse() {
  display("Server was connected successfully.");
}
