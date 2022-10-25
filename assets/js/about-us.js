// 90's style cursor courtesy of https://github.com/tholman/cursor-effects
new cursoreffects.ghostCursor();

// submit button
const submitButton = document.getElementById('submit');
const submittedText = document.getElementById('submitted');

submitButton.addEventListener('click', function(){
    const myInsertText = "Submitted! We can't wait to work with you :)";
  submittedText.innerHTML = myInsertText;
  });