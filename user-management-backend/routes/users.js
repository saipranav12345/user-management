import express from "express";
import {register, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, You are authenticated");
// });

// router.get("/checkuser/:id",verifyuser,(req,res,next)=>{
//         res.send("Hello user, You are logged in and u can delete your account");
// });

// router.get("/checkuser/:id",verifyadmin,(req,res,next)=>{
//     res.send("Hello user, You are logged in and u can delete all accounts");
// });
router.post("/register",register);
// //update
router.put("/:id",updateUser);

//delete
router.delete("/:id",deleteUser);

//get
router.get("/:id",getUser);

//Get all
router.get("/",getUsers);

export default router;