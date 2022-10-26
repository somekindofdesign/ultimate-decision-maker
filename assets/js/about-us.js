//90's style cursor courtesy of https://github.com/tholman/cursor-effects
new cursoreffects.ghostCursor();

//form submisson
const btn = document.getElementById('submit-button');

btn.addEventListener('click', function handleClick(event) {
  const nameInput = document.getElementById('name');
  const ideaInput = document.getElementById('idea');
  const emailInput = document.getElementById('email');

  //clear inputs
  nameInput.value = '';
  ideaInput.value = '';
  emailInput.value = '';
});