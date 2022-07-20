-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT act.actor_id, act.first_name, film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT staff.first_name, staff.last_name, addr.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS addr
ON staff.address_id = addr.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT custom.customer_id, custom.first_name, custom.email, 
addr.address_id, addr.address
FROM sakila.customer AS custom
INNER JOIN sakila.address AS addr
ON custom.address_id = addr.address_id
ORDER BY first_name DESC 
LIMIT 100;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT custom.first_name, custom.email, 
custom.address_id, addr.address, addr.district
FROM sakila.customer AS custom
INNER JOIN sakila.address AS addr
ON custom.address_id = addr.address_id
WHERE addr.district = 'California' AND custom.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT custom.first_name, 
COUNT(addr.address) as address_number
FROM sakila.customer AS custom
INNER JOIN sakila.address AS addr
ON custom.address_id = addr.address_id
WHERE custom.active = 1
GROUP BY custom.customer_id
ORDER BY custom.first_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT staff.first_name, staff.last_name, AVG(paym.amount) as media_payment
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS paym
ON staff.staff_id = paym.staff_id
WHERE YEAR(paym.payment_date) = 2006
GROUP BY staff.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT act.actor_id, act.first_name, film_act.film_id, film.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film_act 
INNER JOIN sakila.film AS film
ON act.actor_id = film_act.actor_id AND film_act.film_id = film.film_id;
