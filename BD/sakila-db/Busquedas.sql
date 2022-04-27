SELECT DATABASE();
USE sakila;
SELECT language_id, name FROM sakila.language WHERE language_id <> 2; # != basicamente 
SELECT first_name FROM sakila.actor WHERE first_name < 'B'; # o sea las As
SELECT title FROM sakila.film WHERE title LIKE '%family%'; # todo lo que tenga la palabra familia
SELECT title, actors FROM film_list WHERE actors LIKE 'NAT_%'; # todo lo que empieza con Nat 
SELECT title FROM film_list WHERE category = 'Sci-Fi' AND rating = 'PG';
SELECT title FROM sakila.film_list WHERE category LIKE 'Children' OR category LIKE 'Family';
SELECT language_id, name FROM sakila.language WHERE NOT(language_id = 2);
SELECT name FROM sakila.customer_list # establecer como me dara los resultados, en que orden 
	ORDER BY name # orden alfabético 
    LIMIT 10; # 10 primeras consultas 
SELECT address, last_update FROM address # ordenar de acuerdo a la última actualización 
	ORDER BY last_update LIMIT 5;
SELECT address, district FROM address
	ORDER BY district, address; # ordernar distrito, dirección