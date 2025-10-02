import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import toast from "react-hot-toast";

const AddBanquetHall = ({isOpen,onClose}) =>{

  const[banquetHallData, setBanquetHallData] = useState({
    hallName: "",
    address: "",
    capacity:"",
    managerName:"",
    contactNumber:"",
    email:"",
    rent:"",
    minBookingAmount:"",
    featuresDescription:"",
  });

  const[preview, setPreview]= useState([]);
  const [photos, setPhotos]=useState({});

  
const handleChange = (e) =>{
  const {name,value}= e.target;
  console.log({name,value});
  setBanquetHallData((previousData)=>({...previousData,[name]:value}));

  const handlePhotoChange = (e) =>{
    const images =e.target.files;
    setPhotos(Images);
    setPreview([]);
    Array.from(Images).forEach((image) =>{
      const imageURL = URL.createObjectURL(image);
      console.log(imageURL);
      setPreview((previousData)=>[...previousData,imageURL]);
    });

  };

}
const handleSubmit = async (e) =>{
  e.preventDefault();

  const formData = new FormData();
   formData.append("hallName", banquetHallData.hallName);
   formData.append("address", banquetHallData.address);
   formData.append("capacity", banquetHallData.capacity);
   formData.append("managerName", banquetHallData.managerName);
   formData.append("contactNumber", banquetHallData.contactNumber);
   formData.append("email", banquetHallData.email);
   formData.append("rent", banquetHallData.rent);
   formData.append("minBookingAmount", banquetHallData.minBookingAmount);
   formData.append("featuresDescription", banquetHallData.featuresDescription);

   if(photos && photos.length > 0){
    Array.from(photos).forEach((photo) =>{
      formData.append("pictures",photo);
    });
   }

   try{
    const res = await AudioParam.post("/admin/AddBanquetHall",formData,{
      headers:{
        "Content-Type":"multipart/form-data",
      },
    });
    toast.success(res.data.message);
   } catch(error){
    toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || "Failed to update query"
        }`
      );
      console.log(error);
      
    
   }
};

   


    if(!isOpen) return null;
    return(
        <>
        <div className="fixed inset-0  bg-black/50">
        <div className="bg-white  mt-[120px] mx-auto w-1/2 min-h-[80vh] rounded-lg">
      <div className="p-2 flex justify-between border-b-2">
        <h1 className="text-3xl text-red-500 hover:text-red-600">Add Banquet Hall </h1>
        <button onClick={onClose} >
<RxCrossCircled />
        </button>
      </div>
      
      <form className="" onSubmit={handleChange}>

      <div className="w-2/3">
        <label className="block mb-1 font-medium" >Hall Name</label>
        <input type="text" name="hallName" 
        required 
        
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded" />
      </div>
      </form>

        </div>
        </div>
        </>
    )
}
export default AddBanquetHall