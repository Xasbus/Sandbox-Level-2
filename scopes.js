//GLOBAL SCOPE
//DECLARE VARIABLES OUTSIDE OF CURLY BRACES
//ANY CODE IN THE SAME FILE HAS ACCESS TO THE VARIABLE
const PI = 3.14;
const globalVariable = "I'm in the global scope";

// FUNCTION SCOPE (AKA LOCAL SCOPE)
//DECLARE VARIABLES IN A FUNCTION
//ONLY THE FUNCTION HAS ACCESS TO THE VARIABLES
function myFunction() {
    const myVariable = 5;
    const localVariable = "I am in the local scope!";
}

//BLOCK SCOPE
//DECLARE • VARIABLES • IN • CURLY BRACES
//ONLY THE CODE BLOCK HAS ACCESS TO THE VARIABLES
while (false) {
    const x = 5;
}
do {
    const x = 7;
    document.write(x);
}

if (true) {
    const x = 8;
} else {
    const x = 10;
} { let x = "x" }