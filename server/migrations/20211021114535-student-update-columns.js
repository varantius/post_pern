'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('students', 'sex', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('students', 'email', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
        [queryInterface.changeColumn('students', 'sex'),queryInterface.changeColumn('students', 'email')]
    );
  }
};
