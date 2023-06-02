import Address from "../models/AddressModel.js";
import  Users  from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAddress= async (req,res) =>{
    try {
        const address = await Address.findAll({
            attributes:['id','province','city', 'regency', 'details', 'postal_code','userId']
        });
        res.json(address);
    } catch (error) {
        console.log(error);
    }
}

export const add_Address= async(req,res)=>{
    const {province,city,regency,details,postal_code,userId} = req.body;
    // const userId = req.params.userId;
    // if(province === null || city === null || regency === null || details === null || postal_code === null) return res.status(400).json({msg: "There Are Empty Fields, Please Fill All Fields First Before Registering"});
    try {
        await Address.create({
            province: province,
            city: city,
            regency: regency,
            details: details,
            postal_code: postal_code,
            userId: userId
        })
        res.json({msg:"Address Successfully Added"})
    } catch (error) {
        console.log(error);
    }
    
}