'use strict';

const Fuel = use('App/Model/Fuel');
const attributes = ['type', 'burn-rate', 'capacity', 'volume'];

class FuelController {

  * index(request, response) {
    const fuels = yield Fuel.with().fetch();

    response.jsonApi('Fuel', fuels);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const fuel = yield Fuel.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Fuel', fuel);
  }

  * show(request, response) {
    const id = request.param('id');
    const fuel = yield Fuel.with().where({ id }).firstOrFail();

    response.jsonApi('Fuel', fuel);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const fuel = yield Fuel.with().where({ id }).firstOrFail();
    fuel.fill(Object.assign({}, input, foreignKeys));
    yield fuel.save();

    response.jsonApi('Fuel', fuel);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const fuel = yield Fuel.query().where({ id }).firstOrFail();
    yield fuel.delete();

    response.status(204).send();
  }

}

module.exports = FuelController;
