const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class InventoryChange extends JsonApiView {
  get attributes() {
    return ['quantity', 'date'];
  }

  ration() {
    return this.belongsTo('App/Http/JsonApiViews/Ration', {
      included: true,
      excludeRelation: 'inventoryChanges'
    });
  }

}

module.exports = InventoryChange;
