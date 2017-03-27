'use strict';

const Crew = use('App/Model/Crew');
const attributes = ['first-name', 'last-name', 'role', 'skills', 'ssn', 'allergies', 'blood-type', 'country'];

class CrewController {

  * index(request, response) {
    const crews = yield Crew.with('mission').fetch();

    response.jsonApi('Crew', crews);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      mission_id: request.jsonApi.getRelationId('mission'),
    };
    const crew = yield Crew.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Crew', crew);
  }

  * show(request, response) {
    const id = request.param('id');
    const crew = yield Crew.with('mission').where({ id }).firstOrFail();

    response.jsonApi('Crew', crew);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      mission_id: request.jsonApi.getRelationId('mission'),
    };

    const crew = yield Crew.with('mission').where({ id }).firstOrFail();
    crew.fill(Object.assign({}, input, foreignKeys));
    yield crew.save();

    response.jsonApi('Crew', crew);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const crew = yield Crew.query().where({ id }).firstOrFail();
    yield crew.delete();

    response.status(204).send();
  }

}

module.exports = CrewController;
