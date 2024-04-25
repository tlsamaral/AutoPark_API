import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Vacancy from '../models/Vacancy';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Vacancy, User, Foto];

try {
  const connection = new Sequelize(databaseConfig);
  models.forEach((model) => model.init(connection));
  models.forEach((model) => model.associate && model.associate(connection.models));
} catch (e) {
  console.log(e);
}
