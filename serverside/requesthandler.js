import userSchema from './models/user.model.js'


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





