'use strict';

const Lucid = use('Lucid');

class Ration extends Lucid {

  inventoryChanges() {
    return this.hasMany('App/Model/InventoryChange');
  }

}

module.exports = Ration;
