'use strict';

const Lucid = use('Lucid');

class Fuel extends Lucid {

  mission() {
    return this.belongsTo('App/Model/Mission', 'id', 'mission_id');
  }
}

module.exports = Fuel;
