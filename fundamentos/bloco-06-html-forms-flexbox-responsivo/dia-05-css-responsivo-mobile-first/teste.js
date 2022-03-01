const loginButton = document.getElementById("button-submit");
loginButton.addEventListener("click", (event) => {
const email = document.getElementById("email");
  const emailDetails = email.value;
  console.log(emailDetails)
  const password = document.getElementById("password");
  const passwordDetails = password.value;
  console.log(passwordDetails)


if (emailDetails === "tryber@teste.com" && passwordDetails === "123456") {
alert('Olá, Tryber!')
} else {
    alert('Email ou senha inválidos.')
} 
});

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', (event) => {
console.log('clique')
if (document.getElementById("agreement").checked === false) {
    event.preventDefault();
  } else if (document.getElementById("agreement").checked === true) {
    return true;
  }
});
