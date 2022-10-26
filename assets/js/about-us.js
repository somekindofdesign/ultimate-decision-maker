//90's style cursor courtesy of https://github.com/tholman/cursor-effects
new cursoreffects.ghostCursor();

//form success message
const submitText = document.getElementById('submitted');

let formSubmit = document.getElementsByTagName("form")[0];
formSubmit.addEventListener("submit", (e) => {
  submitText.innerHTML = "Sent - we look forward to working with you!";
});