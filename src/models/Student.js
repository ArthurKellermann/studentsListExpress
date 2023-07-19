import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
