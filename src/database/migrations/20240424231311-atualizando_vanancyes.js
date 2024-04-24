/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('vanancyes', 'micro_id', {
      type: Sequelize.STRING,
      allowNull: true, // Ou false, dependendo da sua necessidade
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('vanancyes', 'micro_id');
  },
};
