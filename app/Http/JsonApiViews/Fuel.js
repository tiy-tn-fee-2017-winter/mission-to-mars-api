const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Fuel extends JsonApiView {
  get attributes() {
    return ['type', 'burn-rate', 'capacity', 'volume'];
  }

}

module.exports = Fuel;
