"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Vacancy = require('../models/Vacancy'); var _Vacancy2 = _interopRequireDefault(_Vacancy);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Turnstile = require('../models/Turnstile'); var _Turnstile2 = _interopRequireDefault(_Turnstile);

const models = [_Vacancy2.default, _User2.default, _Foto2.default, _Turnstile2.default];

try {
  const connection = new (0, _sequelize2.default)(_database2.default);
  models.forEach((model) => model.init(connection));
  models.forEach((model) => model.associate && model.associate(connection.models));
} catch (e) {
  console.log(e);
}
