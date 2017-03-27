'use strict'

const Lucid = use('Lucid')

class Mission extends Lucid {

  crew() {
    return this.hasMany('App/Model/Crew');
  }

}

module.exports = Mission
