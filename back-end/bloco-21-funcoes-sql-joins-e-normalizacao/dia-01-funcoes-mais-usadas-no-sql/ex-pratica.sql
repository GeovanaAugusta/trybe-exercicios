SELECT * FROM hr.employees;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary)
FROM hr.employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) average_salary
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
MAX(salary) higher_salary, 
MIN(salary) AS lowest_salary,
SUM(salary) AS salary_sum,
ROUND(AVG(salary), 2) AS average_salary
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
SELECT job_id , COUNT(*) AS 'total_it_prog'
FROM hr.employees
WHERE job_id = "it_prog";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT job_id, SUM(salary) salary_sum
FROM hr.employees
GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
SELECT job_id, SUM(salary) salary_sum
FROM hr.employees
WHERE job_id = "it_prog"
GROUP BY job_id;

-- Ou
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
SELECT job_id, AVG(salary) average_salary
FROM hr.employees
WHERE job_id != 'it_prog'
-- Ou WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY `average_salary` DESC;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT job_id, 
AVG(salary) average_salary, 
COUNT(department_id) total_employees
FROM hr.employees
WHERE department_id > 10
-- Ou HAVING department_id > 10
GROUP BY job_id;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
SELECT REPLACE(phone_number, 515, 777) FROM hr.employees;
-- Desativa safe mode
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- Reativa safe mode
SET SQL_SAFE_UPDATES = 1;
SELECT * FROM hr.employees;

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date) hire_year
FROM hr.employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, DAY(hire_date) hire_day
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name,
MONTH(hire_date) hire_month
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(first_name, " ", last_name)) ucase_name
FROM hr.employees;

-- Ou
SELECT UPPER(CONCAT(first_name, " ", last_name)) uppercase_name
FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT last_name, LEFT(hire_date, 7)
FROM hr.employees
WHERE LEFT(hire_date, 7) = '1987-07';
-- Ou WHERE MONTH(hire_date)=7 and YEAR(hire_date)=1987

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT first_name, last_name,
DAY(hire_date) hire_day
-- Ou DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;