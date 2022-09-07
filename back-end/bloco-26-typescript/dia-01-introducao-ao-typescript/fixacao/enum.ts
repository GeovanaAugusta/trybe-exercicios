// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
enum WeeksDays {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
enum RainbowColors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  Indigo = "Anil",
  Violet = "Violeta",
}

// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
enum Actions {
  Salvar,
  Imprimir,
  Abrir,
  Visualizar,
  Fechar
}

// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
enum CardinalPoints {
  Norte = "N",
  Leste = "L",
  Sul = "S",
  Oeste = "O"
}

// TSConfig
// module: especifica o sistema de módulo a ser utilizado no código JavaScript que será gerado pelo compilador como sendo o CommonJS;
// target: define a versão do JavaScript do código compilado como ES6;
// rootDir: define a localização raiz dos arquivos do projeto;
// outDir: define a pasta onde ficará nosso código compilado;
// esModuleInterop: habilitamos essa opção para ser possível compilar módulos ES6 para módulos CommonJS;
// strict: habilitamos essa opção para ativar a verificação estrita de tipo;
// include: essa chave vai depois do objeto CompilerOptions e com ela conseguimos incluir na compilação os arquivos ou diretórios mencionados; e
// exclude: essa chave também vai depois do objeto CompilerOptions e com ela conseguimos excluir da compilação os arquivos mencionados.