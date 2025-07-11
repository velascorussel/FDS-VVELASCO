SHOW DATABASES;

CREATE DATABASE UA_ESHOP;

DROP DATABASE UA_SHOP;

#selelect a db
USE UA_ESHOP;

CREATE TABLE users(
	User_id INT,
    First_name VARCHAR(100),
    Last_name VARCHAR(100),
    Password VARCHAR(50),
    Email VARCHAR(100),
    Date_registered DATE
);

SHOW TABLES;

DESCRIBE TABLE users;

CREATE TABLE prod(
	product_id INT,
    product_name VARCHAR(100)
);

#Renaming a table

ALTER TABLE prod RENAME TO products;

#add new column
ALTER TABLE products
ADD COLUMN description VARCHAR(200),
ADD COLUMN price DECIMAL(10, 2),
ADD COLUMN stocks INT, 
ADD COLUMN date_added DATE;

ALTER TABLE products
ADD COLUMN test VARCHAR(200);

DESC products;

#Remaining a table column
ALTER TABLE products 
RENAME COLUMN test TO brand; 

#modifying table column
ALTER TABLE products 
MODIFY COLUMN brand VARCHAR(100);

ALTER TABLE products 
MODIFY COLUMN brand INT NOT NULL;

#deleting a column 
ALTER TABLE products
DROP COLUMN brand;

#deleting a whole table
DROP TABLE products;

#deleting the whole database
DROP DATABASE UA_ESHOP

#deleting the whole database
DROP DATABASE UA_ESHOP