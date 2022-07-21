-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT mov.title AS 'Film title',
box.domestic_sales AS 'Domestic sales', box.international_sales AS 'International Sales'
FROM pixar2.movies  AS mov
INNER JOIN pixar2.box_office AS box
ON mov.id = box.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT mov.title AS 'Film title',
box.domestic_sales AS 'Domestic sales', box.international_sales AS 'International Sales'
FROM pixar2.movies  AS mov
INNER JOIN pixar2.box_office AS box
ON mov.id = box.movie_id
WHERE box.domestic_sales < box.international_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT mov.title AS 'Film title',
box.rating AS 'Rating'
FROM pixar2.movies  AS mov
INNER JOIN pixar2.box_office AS box
ON mov.id = box.movie_id
ORDER BY mov.title DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
theater.id, theater.name, theater.location,
mov.id, mov.title, mov.director, mov.year, mov.length_minutes, mov.theater_id
FROM pixar2.theater AS theater
LEFT JOIN pixar2.movies AS mov
ON mov.theater_id = theater.id
ORDER BY theater.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
theater.id, theater.name, theater.location,
mov.id, mov.title, mov.director, mov.year, mov.length_minutes, mov.theater_id
FROM pixar2.theater AS theater
RIGHT JOIN pixar2.movies AS mov
ON  theater.id = mov.theater_id
ORDER BY theater.name;