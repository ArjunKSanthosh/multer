import userSchema from './models/user.model.js'


export async function addUser(req,res){
    try {
        const image=req.file
        console.log(req.file);
        const {email,username,phone}=req.body;
        console.log(email,username,phone);
        res.status(201).send({msg:"success"})
        userSchema
            .create({email,username,phone,image})
            .then(()=>{
                return res.status(201).send({msg:"success"})
            })
            .catch((error)=>{
                return res.status(404).send({msg:"user not added"})

            })
    } catch (error) {
        return res.status(404).send(error)
    }
}
 export async function getUsers(req,res) {
    try {
        const users=userSchema.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(404).send({msg:error});
    }
 }





