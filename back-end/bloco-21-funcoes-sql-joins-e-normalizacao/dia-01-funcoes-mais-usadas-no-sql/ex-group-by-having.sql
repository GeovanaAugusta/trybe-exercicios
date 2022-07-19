-- Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT * FROM sakila.film;
    
SELECT rating, AVG(length) media_duration
FROM sakila.film
GROUP BY rating
HAVING media_duration >= 115.0 AND media_duration <= 121.50
ORDER BY media_duration DESC;

-- Ou    
SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;    

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) total_cost
FROM sakila.film
GROUP by rating
HAVING total_cost > 3950.50
ORDER BY total_cost;