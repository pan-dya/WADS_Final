import {Sequelize} from "sequelize";

const db = new Sequelize('wads_fp','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;