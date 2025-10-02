import mongoose from "mongoose";

const deactivationSchema = mongoose.Schema(
    {
        UserId :{
            type : mongoose.Schema.Types.ObjectId,
            ref :"User", 
        },
        reason: {
            type : String,
            required: true,
        },
        feedback :{
            type :String,
            required:true,
        },
    },
    {timestamps: true}
);

const Deactivation =mongoose.model("Deactivation" , deactivationSchema);
export default Deactivation;