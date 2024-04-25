"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Vacancy extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Descrição precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sensor_id: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Sensor id precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_r: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_R precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_g: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_G precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_b: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_B precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      micro_id: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Id do microcontrolador precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'vanancies',
    });
  }
} exports.default = Vacancy;
