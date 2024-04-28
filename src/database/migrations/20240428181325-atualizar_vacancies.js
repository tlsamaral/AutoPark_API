/** @type {import('sequelize').Sequelize} */
const { Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn('vanancies', 'is_occupied', {
      type: Sequelize.BOOLEAN,
      allowNull: false, // Se necessário, defina como true ou false dependendo dos requisitos
      defaultValue: false, // Defina um valor padrão se necessário
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('vanancies', 'is_occupied');
  },
};
