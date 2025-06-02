import User from "../models/userSchema"
export const Register = async(req, res)=>{
    try{
        const {email, password, name, username} =req.body;
        if(!name || !email || !password || !username){
            return req.status(401).json({
                message: "All fields are required",
                success: false
            })
        }

        const user = await User.findOne(email);
        if(user){
            return res.status(401).json({
                message: "User already Exists.",
                success: false
            })
        }

        let user = await

    }catch(error){

    }
}