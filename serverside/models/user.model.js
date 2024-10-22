import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:Number},
    image:{type:Object}
})
export default mongoose.model.Users||mongoose.model("User",userSchema)