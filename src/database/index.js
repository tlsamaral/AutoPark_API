import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Vacancy from '../models/Vacancy';
import User from '../models/User';
import Foto from '../models/Foto';
import Turnstile from '../models/Turnstile';

const models = [Vacancy, User, Foto, Turnstile];

try {
  const connection = new Sequelize(databaseConfig);
  models.forEach((model) => model.init(connection));
  models.forEach((model) => model.associate && model.associate(connection.models));
} catch (e) {
  console.log(e);
}
