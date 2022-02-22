const submitButton = document.getElementById("button-enviar");
const clearButton = document.getElementById("button-limpa");
const checkboxPhoto = document.getElementById("checkbox-foto");



const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}



var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    { 
         
      rule: 'required',
      errorMessage: 'Name is requiered!',
    },
  ])
  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    
  ]);

  window.onload = function() {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
  };