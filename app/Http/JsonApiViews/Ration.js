const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Ration extends JsonApiView {
  get attributes() {
    return ['name', 'quantity', 'remaining', 'type', 'weight', 'expiration_date'];
  }

}

module.exports = Ration;
