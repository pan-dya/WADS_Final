import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;


const Services = db.define('services',{
    typeOfService :{
        type:DataTypes.INTEGER
    },
    details:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});


export default Services;