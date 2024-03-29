const require=require("express").Router();
const {User, validate}=require("../Models/User");
const bcrypt =require("bcrypt")

router.post("/", async(req,res)=>{
    try{
        const{error}=validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});

            const user=await User.findOne({email:req.body.email});
            if (user)
                return res.status(409).send({message:"User Already Exists!"})
            const salt= await bcrypt.genSalt(Number(process.env.SALT))
            const hashPassword= await bcrypt.hash(req.body.password,salt);

            await new User({...res.body, password:hashPassword}).save();
            res.status(201).send({message:"Account Created Successfully"})
             
    }
    catch(error){
        res.status(500).send({message:"Internal Server Error"})

    }
} )