import express from "express";
import { getUsers,Register, Login, Logout } from "../controller/Users.js";
import { getAddress, add_Address, updateAddress } from "../controller/Address.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/address/:userId',getAddress);
router.post('/address', add_Address);
router.put('/address/:userId', updateAddress);
router.get('/users',verifyToken,getUsers);
router.post('/users',Register);
router.post('/login',Login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);



export default router;