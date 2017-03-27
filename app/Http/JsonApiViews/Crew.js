const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Crew extends JsonApiView {
  get attributes() {
    return ['first_name', 'last_name', 'role', 'skills', 'ssn', 'allergies', 'blood_type', 'country'];
  }

  mission() {
    return this.belongsTo('App/Http/JsonApiViews/Mission', {
      included: true,
      excludeRelation: 'crew'
    });
  }

}

module.exports = Crew;
