import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;


const Services = db.define('services',{
    gardening :{
        type:DataTypes.TINYINT(1)
    },
    housework :{
        type:DataTypes.TINYINT(1)
    },
    mental_support :{
        type:DataTypes.TINYINT(1)
    },
    heavy_lifting :{
        type:DataTypes.TINYINT(1)
    },
    delivery :{
        type:DataTypes.TINYINT(1)
    },
    construction :{
        type:DataTypes.TINYINT(1)
    },
    medical_support :{
        type:DataTypes.TINYINT(1)
    },
    others :{
        type:DataTypes.TINYINT(1)
    },
    details:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});


export default Services;