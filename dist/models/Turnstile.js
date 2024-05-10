"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Turnstile extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      description: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Descrição precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      is_open: {
        type: _sequelize2.default.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'turnstile',
    });
  }
} exports.default = Turnstile;
