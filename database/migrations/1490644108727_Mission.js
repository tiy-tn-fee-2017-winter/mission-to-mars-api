'use strict';

const Schema = use('Schema');

class MissionSchema extends Schema {

  up() {
    this.create('missions', (table) => {
      table.increments();
      table.text('objective');
      table.string('location');
      table.timestamp('launch_time');
      table.bigInteger('duration');
      table.string('host_country');
      table.timestamps();
    });
  }

  down() {
    this.drop('missions');
  }

}

module.exports = MissionSchema;
