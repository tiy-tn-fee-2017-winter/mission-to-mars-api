'use strict';

const Schema = use('Schema');

class RationSchema extends Schema {

  up() {
    this.create('rations', (table) => {
      table.increments();
      table.string('name');
      table.integer('quantity');
      table.string('type');
      table.float('weight');
      table.date('expiration_date');
      table.timestamps();
    });
  }

  down() {
    this.drop('rations');
  }

}

module.exports = RationSchema;
