-- SELECT * FROM customer
-- SELECT concat(first_name,' ', last_name) AS full_name FROM customer;
-- SELECT DISTINCT create_date FROM customer;
-- -- SELECT * FROM customer ORDER BY first_name DESC;
-- SELECT film_id, title, description,release_year, rental_rate FROM film ORDER BY rental_rate ASC;
-- SELECT address, phone FROM address WHERE district = 'Texas';
-- -- SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Go Purple';
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'Fo%';
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;
-- SELECT * FROM customer
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer INNER JOIN payment
-- ON customer.customer_id = payment.customer_id
-- SELECT film.title FROM film INNER JOIN inventory ON film.film_id != inventory.film_id;
-- SELECT country.country, city.city FROM country INNER JOIN city ON country.country_id = city.country_id;


