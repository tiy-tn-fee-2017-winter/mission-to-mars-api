'use strict';

const Schema = use('Schema');

class InventoryChangeSchema extends Schema {

  up() {
    this.create('inventory_changes', (table) => {
      table.increments();
      table.integer('quantity');
      table.date('date');
      table.integer('ration_id').references('rations.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('inventory_changes');
  }

}

module.exports = InventoryChangeSchema;
