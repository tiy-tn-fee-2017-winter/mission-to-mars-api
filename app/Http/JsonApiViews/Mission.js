const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Mission extends JsonApiView {
  get attributes() {
    return ['objective', 'location', 'launch_time', 'duration', 'host_country'];
  }

  crew() {
    return this.hasMany('App/Http/JsonApiViews/Crew', {
      included: true,
      excludeRelation: 'mission'
    });
  }
}

module.exports = Mission;
