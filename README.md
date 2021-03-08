# Prueba técnica NegociaCF

## Empezando

Para correr este proyecto en tu máquina:

- Clona este repo https://github.com/mosqueradvd/customersapi.git
- entra a la carpeta principal `cd <proyecto_clonado>` 
- ejecuta `npm install`
- luego de eso entra en la carpeta de la aplicación `cd app` y ejecuta `npm install`
- en la primera carpeta que entraste ejecuta `npm run dev` y seguido de eso ejecuta `npm run start`
en la carpeta de app

## Base de datos

Para ejecutar este proyecto es necesario tener una Base de datos. En este caso he utilizado PostgreSQL.
Puedes descargarlo si no lo tienes en tu máquina en este link [Download PostgreSQL](https://www.postgresql.org/download/)

Tan solo crea una base de datos sencilla llamada customersapi y ejecuta los siguientes queries:

```
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
  ('User One', 'USA', 'user@one.com'),
  ('User Two', 'Colombia', 'user@two.com');
 ```
  
De esta manera habrás creado la base de datos y ahora la app podrá consumir la información con la API.

Finalment el proyecto se ejecutará y podrás ver su funcionamiento.
