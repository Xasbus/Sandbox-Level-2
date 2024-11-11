class MyCar {
  color = "Red";
  year = 2024;
}

function newObject() {
  const myCar = new MyCar();
  const myCar2 = new MyCar();
  const myCar3 = new MyCar();

  myCar2.color = "white";
  myCar3.year = 2025;

  display(JSON.stringify(myCar));
  display(JSON.stringify(myCar2));
  display(JSON.stringify(myCar3));
}

function classVsObject() {
  class MyCar {
    color = "Red";
    year = 2024;
  }
  const myCar = {
    color: "red",
    year: 2024,
  };
  debugger;
  display(MyCar);
  display(myCar);
}

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

function submitForm(event) {
  const inputs = event.target;
  emailInput = inputs[0];
  const email = emailInput.value;
  display("Submitting form for the email " + email + "... ");
  setTimeout(serverResponse, 5000);
}

function serverResponse() {
  display("Server was connected successfully.");
}

function displayObject() {
  const myCar = {
    color: "red",
    year: 2024,
  };
  const result = JSON.stringify(myCar);
  display(result);
}

function myFunctionPromised(resolve) {
  setTimeout(serverResponse2, 5000);
  display("Inside my myFunctionPomised... ");

  function serverResponse2() {
    display("Server was connected successfully. ");
  }
  resolve("The server has responded and promise is fulfilled. ");
}

function makePromise() {
  const promise = new Promise(myFunctionPromised);
  promise.then(getMessage);
  display("Promises made, promises kept. ");
}

function getMessage(resolveVaule) {
  display(resolveVaule);
}

function activatorTest(myParameter) {
  display(myParameter);
}

function outerFunction() {
  const message = "Message from the outer function. ";
  innerFunction();

  function innerFunction() {
    display(message);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inputs = event.target;
  emailInput = inputs[0];
  const email = emailInput.value;
  display("Submitting form for the email " + email + "... ");
  const promise = new Promise(getServerResponse);
  promise.then(parseResponse);
}

function getServerResponse(resolve) {
  setTimeout(activateResolve, 5000);

  function activateResolve() {
    const response = {
      message: "Successfully connected. ",
    };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
  }
}

function parseResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  display(message);
}
