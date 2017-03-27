'use strict'

const Lucid = use('Lucid')

class Crew extends Lucid {


  mission() {
    return this.belongsTo('App/Model/Mission', 'id', 'mission_id');
  }
}

module.exports = Crew
