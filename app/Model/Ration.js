'use strict';

const Lucid = use('Lucid');

class Ration extends Lucid {

  inventoryChanges() {
    return this.hasMany('App/Model/InventoryChange');
  }

  calculateRemaining() {
    if (this.relations.inventoryChanges) {
      const inventoryChanges = this.relations.inventoryChanges;

      return inventoryChanges.reduce((remaining, change) => remaining - change.quantity,
        this.quantity);
    }
  }

}

module.exports = Ration;
