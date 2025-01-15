
import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.MDB_NAME!, process.env.MDB_USER!, process.env.MDB_PASSWORD!, {
   host: process.env.MDB_HOST,
   dialect: 'mysql',
   logging: false,
});

export default sequelize;

