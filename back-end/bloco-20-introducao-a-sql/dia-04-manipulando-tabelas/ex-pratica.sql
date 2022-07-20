-- Exercício 1: Insira as produções da Pixar na tabela Movies:
SELECT * FROM Pixar.Movies;

-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

INSERT IGNORE INTO Pixar.Movies (title, director, year, length_minutes) VALUES
('Monstros SA','Pete Docter', 2001, 92), 
('Procurando Nemo','John Lasseter', 2003, 107),
('Os Incríveis','Brad Bird', 2004, 116),
('WALL-E','Pete Docter', 2008, 104);

-- O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela BoxOffice.
SELECT * FROM Pixar.BoxOffice;
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales) VALUES 
(8, 6.8, 450000000, 37000000);

-- O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando UPDATE.
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

--  O título do filme "Ratatouille" está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
UPDATE IGNORE Pixar.Movies
SET title = 'Ratatouille' AND year = 2007
WHERE id = 3;

-- Exclua da tabela Movies o filme "WALL-E". 

-- Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".