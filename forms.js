function myProcessForm(event) {
    event.preventDefault(); //Prevents page from refreshing after submitting a form.
    const form = event.target;
    const myPasswordInput = form[0];
    const firstNameInput = form[1];
    const lastNameInput = form[2];
    const value = firstNameInput.value;
    output(` The password is ${value}<br>`);
}