import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;


const Address = db.define('address',{
    province:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
    regency:{
        type: DataTypes.STRING,
        allowNull: false

    },
    details:{
        type: DataTypes.STRING,
        allowNull:false
    },
    postal_code:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            len:[5]
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
    }
},{
    freezeTableName:true
});


export default Address;