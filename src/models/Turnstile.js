import Sequelize, { Model } from 'sequelize';

export default class Turnstile extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: Sequelize.STRING,
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
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'turnstile',
    });
  }
}
