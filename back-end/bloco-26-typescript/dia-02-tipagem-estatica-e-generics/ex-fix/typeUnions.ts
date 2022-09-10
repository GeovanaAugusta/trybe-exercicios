// A função abaixo pode receber tanto um número
// quanto uma string.
type CPF = (number | string)

function retornarCPF(cpf: CPF){
  console.log("Seu CPF é: " + cpf);
}
retornarCPF('1153254154')

// Crie um type union que represente os estados físicos  da matéria: líquido, sólido ou gasoso.
type State = ("líquido" | "sólido" | "gasoso" )

function returnStateOfSubject(state: State){
  console.log("O estado da matéria é: " + state);
}
returnStateOfSubject('líquido')

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Doc = (number | string )

function returnDoc(doc: Doc){
  console.log("O documento é: " + doc);
}
returnDoc(1153254154)

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OperationalSystem = ("linux" | "mac os" | "windows" )

function returnOperationalSystem(oper: OperationalSystem){
  console.log("O Sistema Operacional é: " + oper);
}
returnOperationalSystem('mac os')

// Crie um type union que represente as vogais do alfabeto.
type Vowel = ("a" | "e" | "i" | "o"|"u" )

function returnVowel(vowel: Vowel){
  console.log("A vogal é: " + vowel);
}
returnVowel('a')