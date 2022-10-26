//90's style cursor courtesy of https://github.com/tholman/cursor-effects
new cursoreffects.ghostCursor();

//form success message
const submitText = document.getElementById('submitted');
const nameInput = document.getElementById('name');
const ideaInput = document.getElementById('idea');
const emailInput = document.getElementById('email');

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  submitText.innerHTML = "Sent - we look forward to working with you!";

  nameInput.value = '';
  ideaInput.value = '';
  emailInput.value = '';
});