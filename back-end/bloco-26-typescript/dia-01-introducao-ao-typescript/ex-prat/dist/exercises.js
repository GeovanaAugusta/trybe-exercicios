"use strict";
// Exercício 1: Temos um array characters que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo Character e da função usada para imprimir as informações básicas de todos os jogadores.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seasons = exports.MonthsYear = void 0;
// const characters: any = [
const characters = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
characters.forEach(printCharacter);
// Exercício 2: Crie uma enum que represente os meses do ano.
var MonthsYear;
(function (MonthsYear) {
    MonthsYear["JANUARY"] = "January";
    MonthsYear["FEBRUARY"] = "February";
    MonthsYear["MARCH"] = "March";
    MonthsYear["APRIL"] = "April";
    MonthsYear["MAY"] = "May";
    MonthsYear["JUNE"] = "June";
    MonthsYear["JULY"] = "July";
    MonthsYear["AUGUST"] = "August";
    MonthsYear["SEPTEMBER"] = "September";
    MonthsYear["OCTOBER"] = "October";
    MonthsYear["NOVEMBER"] = "November";
    MonthsYear["DECEMBER"] = "December";
})(MonthsYear = exports.MonthsYear || (exports.MonthsYear = {}));
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
var Seasons;
(function (Seasons) {
    Seasons["SUMMER"] = "Summer";
    Seasons["AUTUMN"] = "Autumn";
    Seasons["WINTER"] = "Winter";
    Seasons["SPRING"] = "Spring";
})(Seasons = exports.Seasons || (exports.Seasons = {}));
// Exercício 6: Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Exercício 7: Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Exercício 8: Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts;
// Ele script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.
// Exercício 9: Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.
// Exercício 10: Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote readline-sync, documentação.
// Em cada script, crie uma função chamada exec que:
// Capta as entradas da pessoa usuária via terminal;
// Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
// Exibe uma mensagem com o resultado. Ex: "1km é igual a 1000m.";
// Não se esqueça de chamar a função exec ao final do script. exec();"
// Exercício 11: Crie um arquivo index.ts que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:
// O script deve ser acionado por meio do comando npm start no package.json;
// Utilize o readline-sync para realizar o input de dados;
// Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
// Você pode utilizar o require para executar o script em questão.
