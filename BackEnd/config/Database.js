import {Sequelize} from "sequelize";

const db = new Sequelize('WADS_FP', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;