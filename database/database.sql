CREATE DATABASE customersapi;

CREATE TABLE customers
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  country VARCHAR(80),
  email TEXT
);

INSERT INTO customers
  (name, country, email)
VALUES
  ('Marcus Phoenix', 'USA', 'marcus@phoenix.com'),
  ('David Mosquera', 'Colombia', 'dvd@mosquera.com');