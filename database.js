import  { Sequelize } from 'sequelize';
import { } from 'dotenv/config';

/** lendo as variáveis de ambiente para conexão com o banco de dados */
const  dbName =process.env.DB_NAME;
const  dbUser =process.env.DB_USER;
const  dbPassword =process.env.DB_PASS;
const  dbHost =process.env.DB_HOST;

const sequelize = new Sequelize(dbName,dbUser,dbPassword, {
    dialect:'mysql',
    host:dbHost
});

export default sequelize;