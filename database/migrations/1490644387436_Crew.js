'use strict';

const Schema = use('Schema');

class CrewSchema extends Schema {

  up() {
    this.create('crews', (table) => {
      table.increments();
      table.integer('mission_id')
        .references('missions.id')
        .onDelete('CASCADE');

      table.string('first_name');
      table.string('last_name');
      table.string('role');
      table.json('skills');
      table.string('ssn');
      table.json('allergies');
      table.string('blood_type');
      table.string('country');
      table.timestamps();
    });
  }

  down() {
    this.drop('crews');
  }

}

module.exports = CrewSchema;
