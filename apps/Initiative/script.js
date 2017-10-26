

var titles = {
  IDEA: 'What kind of idea do you have?',
  GOOD: 'What has gone well?',
  NOT_GOOD: 'What could be improved?',
  FACT: 'Tell us what you know',
}

var isFormTouched = false;
function touchForm(value) {
  var question = document.getElementById('question-label');
  if (question) {
    question.innerHTML = titles[value] || 'How do you feel?';
  }

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