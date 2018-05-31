CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  picture varchar(255),
  price VARCHAR(50),
  name VARCHAR(50),
  discription varchar(255)
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(50),
  phone_number VARCHAR(50),
  total_cost VARCHAR(50)
);

CREATE TABLE item_orders (
  id SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES items(id),
  order_id INTEGER REFERENCES orders(id)
);

