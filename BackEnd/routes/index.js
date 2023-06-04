import express from "express";
import { getUsers,Register, Login, Logout, updateUser } from "../controller/Users.js";
import { getAddress, add_Address, updateAddress, getAddress2 } from "../controller/Address.js";
import { getServices, fillServices } from "../controller/Services.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/services/:userId',getServices);
router.post('/services', fillServices);
router.get('/address/:userId', getAddress);
router.get('/addresses/:userId', getAddress2);
router.post('/address', add_Address);
router.put('/address/:userId', updateAddress);
router.get('/users',verifyToken,getUsers);
router.post('/users',Register);
router.post('/login',Login);
router.put('/users/:id', updateUser);
router.get('/token',refreshToken);
router.delete('/logout',Logout);



export default router;