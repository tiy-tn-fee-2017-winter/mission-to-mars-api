'use strict'

const Lucid = use('Lucid')

class InventoryChange extends Lucid {


  ration() {
    return this.belongsTo('App/Model/Ration', 'id', 'ration_id');
  }
}

module.exports = InventoryChange
