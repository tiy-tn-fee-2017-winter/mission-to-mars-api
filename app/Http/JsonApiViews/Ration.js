const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Ration extends JsonApiView {
  get attributes() {
    return ['name', 'quantity', 'type', 'weight', 'expiration_date'];
  }

}

module.exports = Ration;
