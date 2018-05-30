CREATE TABLE itmes (
  id SERIAL PRIMARY KEY,
  picture VARBINARY(max),
  price VARCHAR(50),
  name VARCHAR(50),
  discription varchar(255)
);

CREATE orders(
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(50),
  phone_number VARCHAR(50),
  total_cost VARCHAR(50)
);

CREATE order_items (
  id SERIAL PRIMARY,
  item_id INTEGER REFERENCES item(id),
  order_id INTEGER REFERENCES order(id)
);
