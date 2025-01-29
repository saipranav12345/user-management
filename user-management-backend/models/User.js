import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    department:{
        type: String,
        required: true,
    },
},
{ timestamps:true }, //will give created at and updated at times
);

export default mongoose.model("User",UserSchema);