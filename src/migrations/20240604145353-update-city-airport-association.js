'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addConstraint(
      'Airports', 
      {
      fields: ['cityId'],
      type:'FOREIGN KEY',
      name:'City_fkey_constratint',
      references:{
        table: 'Cities',
        field:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    }
    )
  },

  async down (queryInterface, Sequelize) {
  
  
    await queryInterface.removeConstraint(
      'Airports',
      'City_fkey_constratint'
    );
     
  }
};
