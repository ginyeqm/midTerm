exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table){
    table.increments('itemId').primary();
    table.string('picture').notNull();
    table.string('category').notNull();
    table.decimal('price').notNull();
    table.text('name').notNull();
    table.text('description').notNull();
  }).then(function(){
    return knex.schema.createTable('orders', function(table){
      table.string('orderId').primary();
      table.text('customer_name').notNull();
      table.string('phone_number').notNull();
      table.decimal('total_cost').notNull();
    })
  }).then(function(){
    return knex.schema.createTable('item_orders', function(table){
      table.increments('id').primary();
      table.integer('items_id');
      table.string('orders_id');
      table.foreign('items_id').references('items.itemId');
      table.foreign('orders_id').references('orders.orderId');
    })
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('item_orders')
 .dropTable('orders').dropTable('items');
};

// talbe.foreign.integer('item_id').references('items-id')
