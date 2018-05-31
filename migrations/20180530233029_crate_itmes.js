exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table){
    table.increments();
    table.string('picture').notNull();
    table.decimal('price').notNull();
    table.text('name').notNull();
    table.text('description').notNull();
  };
  .createTable('orders', function(table){
    table.increments();
    table.text('customer_name').notNull();
    table.string('phone_number').notNull();
    table.decimal('total_cost').notNull();
  });
  .createTable('item_orders', function(table){
    table.increments();
    table.integer('item_id').notNull();
    table.integer('order_id').notNull();
  });
}

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('items').dropTable('orders').dropTable('item_orders');
};
