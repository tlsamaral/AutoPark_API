/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameTable('vanancyes', 'vanancies');
  },

  async down(queryInterface) {
    await queryInterface.renameTable('vanancies', 'vanancyes');
  },
};
