"use strict";
// Exercício 11: Crie um arquivo index.ts que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// O script deve ser acionado por meio do comando npm start no package.json;
// Utilize o readline-sync para realizar o input de dados;
// Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
// Você pode utilizar o require para executar o script em questão.
// ./index.ts
const readline_sync_1 = __importDefault(require("readline-sync")); // importamos o pacote readline-sync
// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];
// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);
// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline_sync_1.default.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");
require(scripts[choice].script); // executamos o script escolhido usando o require
