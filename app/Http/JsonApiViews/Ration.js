const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Ration extends JsonApiView {
  get attributes() {
    return ['name', 'quantity', 'type', 'weight', 'expiration_date'];
  }

  inventoryChanges() {
    return this.hasMany('App/Http/JsonApiViews/InventoryChange', {
      included: true,
      excludeRelation: 'ration'
    });
  }

}

module.exports = Ration;
