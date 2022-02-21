const submitButton = document.getElementById("button-enviar");
const clearButton = document.getElementById("button-limpa");
const checkboxPhoto = document.getElementById("checkbox-foto");

// A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

submitButton.addEventListener("click", (event) => {
  const email = document.getElementById("email");
  const emailDetails = email.value;
  const name = document.getElementById("nome");
  const nameDetails = name.value;
  const textArea = document.getElementById('textarea');
  const textAreaDetails = textArea.value;
  if (
    emailDetails === "" ||
    emailDetails.length < 10 ||
    emailDetails.length > 50 ||
    nameDetails === "" ||
    nameDetails.length < 10 ||
    nameDetails.length > 40 ||
    textAreaDetails > 500 
  ) {
    alert("Dados inválidos");
  } else {
    alert("Dados enviados com sucesso!");
  }
  if (document.getElementById("checkbox-foto").checked === false) {
    event.preventDefault();
  } else if (document.getElementById("checkbox-foto").checked === true) {
    return true;
  }
});

// Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
