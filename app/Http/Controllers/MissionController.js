'use strict';

const Mission = use('App/Model/Mission');
const attributes = ['objective', 'location', 'launch-time', 'duration', 'host-country'];

class MissionController {

  * index(request, response) {
    const missions = yield Mission.with().fetch();

    response.jsonApi('Mission', missions);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const mission = yield Mission.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Mission', mission);
  }

  * show(request, response) {
    const id = request.param('id');
    const mission = yield Mission.with().where({ id }).firstOrFail();

    response.jsonApi('Mission', mission);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const mission = yield Mission.with().where({ id }).firstOrFail();
    mission.fill(Object.assign({}, input, foreignKeys));
    yield mission.save();

    response.jsonApi('Mission', mission);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const mission = yield Mission.query().where({ id }).firstOrFail();
    yield mission.delete();

    response.status(204).send();
  }

}

module.exports = MissionController;
