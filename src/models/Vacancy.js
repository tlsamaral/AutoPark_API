import Sequelize, { Model } from 'sequelize';

export default class Vacancy extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Descrição precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sensor_id: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Sensor id precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_r: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_R precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_g: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_G precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      port_b: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Port_B precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      micro_id: {
        type: Sequelize.STRING,
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
}
