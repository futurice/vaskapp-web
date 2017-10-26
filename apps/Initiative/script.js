
var isFormTouched = false;

function touchForm() {
  if (isFormTouched) {
    return;
  }


  // remove not-touched className
  var form = document.getElementById('form');
  if (form) {
    form.classList.remove('not-touched');
  }

  // autofocus
  var firstInput = document.getElementById('first-input');
  if (firstInput) {
    firstInput.focus();
  }

  isFormTouched = true;
}