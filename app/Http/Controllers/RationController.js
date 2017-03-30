'use strict';

const Ration = use('App/Model/Ration');
const attributes = ['name', 'quantity', 'type', 'weight', 'expiration-date'];

class RationController {

  * index(request, response) {
    const rations = yield Ration.with('inventoryChanges').fetch();

    rations.forEach((ration) => {
      ration.remaining = ration.calculateRemaining();
    });

    response.jsonApi('Ration', rations);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const ration = yield Ration.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Ration', ration);
  }

  * show(request, response) {
    const id = request.param('id');
    const ration = yield Ration.with().where({ id }).firstOrFail();

    response.jsonApi('Ration', ration);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const ration = yield Ration.with().where({ id }).firstOrFail();
    ration.fill(Object.assign({}, input, foreignKeys));
    yield ration.save();

    response.jsonApi('Ration', ration);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const ration = yield Ration.query().where({ id }).firstOrFail();
    yield ration.delete();

    response.status(204).send();
  }

}

module.exports = RationController;
