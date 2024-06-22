'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      }
      )
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportid',

      }
      )

      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportid',
        
      }
      )
    }
  }
  Flights.init({
    
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false

    },
    airplaneid: 
    
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportid: 
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalAirportid: 
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalTime: 
    {
      type:DataTypes.DATE,
      allowNull:false
    },

    departureTime: 
    {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardinggateno: {
      type:DataTypes.STRING,
      allowNull:false
    },
    totalSeats:  {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};