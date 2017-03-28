'use strict';

// writing this comment so I can push new branch

const Schema = use('Schema');

class FuelSchema extends Schema {

  up() {
    this.create('fuels', (table) => {
      table.increments();
      table.string('type');
      table.float('burn_rate');
      table.float('capacity');
      table.float('volume');
      table.timestamps();
    });
  }

  down() {
    this.drop('fuels');
  }

}

module.exports = FuelSchema;
