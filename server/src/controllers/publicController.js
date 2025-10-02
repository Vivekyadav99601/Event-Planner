import Contact from "../models/contactModel.js";

export const ContactUs = async (req, res, next)=>{
    try{
        const {name ,email,subject,message,phone} = req.body;

        if(!name || !email || !subject || !message ||!phone){
            const error = new Error("fill alll the fields");
            error.statuscode= 400;
            return next(error);
        }
        else{
            const newUser = await Contact.create({
                name,
                email,
                subject,
                phone,
                message,
                status: "Pending",
            });
        }
        res.status(201).json({message:"Thanks for contacting us you will receive an email soon...."});
    }catch(error){
     next(error);
    }
};
