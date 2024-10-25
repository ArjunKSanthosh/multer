import userSchema from './models/user.model.js'
import {promises as fs} from 'fs'
import { fileURLToPath } from 'url';
import {dirname,join} from 'path'


export async function addUser(req, res) {
    try {
        const image = req.file;
        console.log(req.file);
        const { email, username, phone } = req.body;
        console.log(email, username, phone);

        // Create the user and send a response only after it's done
        await userSchema.create({ email, username, phone, image });
        res.status(201).send({ msg: "success" });
        
    } catch (error) {
        console.error(error); // Optional: Log the error for debugging
        res.status(403).send({ msg: "user not added", error: error.message });
    }
}
 export async function getUsers(req,res) {
    try {
        console.log("hai");
        
        const users= await userSchema.find();
        console.log(users);
        
        res.status(200).send(users);
    } catch (error) {
        res.status(404).send({msg:error});
    }
 }
export async function deleteUserr(req,res){
    
    const {id}=req.params;
    console.log(id);
    const user=await userSchema.findOne({_id:id})
    console.log(user);
    
    if(!user){
        return res.status(500).send({msg:"user not available"})
    }
    const __filename=fileURLToPath(import.meta.url)
    console.log(__filename);
    const __dirname=dirname(__filename)
    console.log(__dirname);
    const fullpath=join(__dirname,"/uploads/",user.image.filename)
    console.log(fullpath);
    await fs.unlink(fullpath)
    await userSchema.deleteOne({_id:id}).then(()=>{
        res.status(200).send({msg:"deleted"});
    }).catch((error)=>{
        res.status(500).send({error:error});
    })
    
}




