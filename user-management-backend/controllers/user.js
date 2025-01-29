import User from "../models/User.js";
import { createError } from "../utils/error.js";


export const register = async (req,res,next) => {
    
 try {
    const newUser = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        department:req.body.department,
    })
    await newUser.save()
    res.status(200).send("User has been created")
 } catch (err) {
    next(err)
 }   
};

export const updateUser=async (req,res,next) => {
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{ $set: req.body }, {new:true})
        res.status(200).json(updatedUser)
    }catch (err) {
        next(err)
    }
};

export const deleteUser=async (req,res,next) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    }  catch (err) {
        next(err)
    }
};

export const getUser=async (req,res,next) => {
    const failed=false;
    if (failed) return next(createError(401,"You are unautherized!"));
    let requestedUser;
    try {
        requestedUser = await User.findById(req.params.id);
        res.status(200).json(requestedUser);
    } catch (err) {
        if (!requestedUser) {
            next(createError(404, "User not found!"));
        }
        next(err);
    }
};

export const getUsers=async (req,res,next) => {
    try{
        const Users=await User.find()
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
};