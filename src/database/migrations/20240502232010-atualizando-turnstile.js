/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('turnstile', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn('turnstile', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('turnstile', 'created_at');
    await queryInterface.removeColumn('turnstile', 'updated_at');
  },
};
