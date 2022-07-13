-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

-- Escreva uma query para exibir três números em três colunas.
SELECT 3 , 5, 7;

-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 15 + 5;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 15 * 5;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

-- Escreva uma query para exibir o nome como "" e as horas como "tempo_de_trabalho" de cada projeto.
SELECT * FROM Projects;
SELECT name as 'nome_do_projeto', hours as 'tempo_de_trabalho' FROM Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT name FROM Scientists
ORDER BY name ASC;

-- Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT name FROM Projects
ORDER BY name DESC;

-- Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto.

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS resultado FROM Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours FROM Projects
ORDER BY hours DESC LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT * FROM AssignedTo;
SELECT DISTINCT project FROM AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT name FROM Projects
ORDER BY hours DESC 
LIMIT 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name FROM Projects
ORDER BY hours DESC 
LIMIT 1
OFFSET 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects
ORDER BY hours ASC 
LIMIT 5;

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem', COUNT(name), 'cientistas na tabela Scientists.') AS total_cientistas FROM Scientists;