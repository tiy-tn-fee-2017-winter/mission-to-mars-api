'use strict';

const InventoryChange = use('App/Model/InventoryChange');
const attributes = ['quantity', 'date'];

class InventoryChangeController {

  * index(request, response) {
    const inventoryChanges = yield InventoryChange.with('ration').fetch();

    response.jsonApi('InventoryChange', inventoryChanges);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      ration_id: request.jsonApi.getRelationId('ration'),
    };
    const inventoryChange = yield InventoryChange.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('InventoryChange', inventoryChange);
  }

  * show(request, response) {
    const id = request.param('id');
    const inventoryChange = yield InventoryChange.with('ration').where({ id }).firstOrFail();

    response.jsonApi('InventoryChange', inventoryChange);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      ration_id: request.jsonApi.getRelationId('ration'),
    };

    const inventoryChange = yield InventoryChange.with('ration').where({ id }).firstOrFail();
    inventoryChange.fill(Object.assign({}, input, foreignKeys));
    yield inventoryChange.save();

    response.jsonApi('InventoryChange', inventoryChange);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const inventoryChange = yield InventoryChange.query().where({ id }).firstOrFail();
    yield inventoryChange.delete();

    response.status(204).send();
  }

}

module.exports = InventoryChangeController;
