import { Router } from "express";
import * as user from "./requesthandler.js";
import multer from "multer";
import path from 'path';

const storage=multer.diskStorage({
    destination:"./uploads",
    filename:function (req,file,cb){
        const uniqueSuffix=Date.now() + '-' +Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix+"-"+file.originalname)
    }
})
const upload=multer({storage})
const router=Router();

router.route("/upload").post(upload.single('file'),user.addUser)
router.route("/getusers").get(user.getUsers)
router.route('/image/:filename').get((req,res)=>{
    let {filename}=req.params;
    // console.log(filename);
    return res.sendFile(path.resolve(`./uploads/${filename}`))
})
router.route("/delete/:id").delete(user.deleteUserr)
export default router;