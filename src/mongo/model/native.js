import mongoose, { Schema, models }  from "mongoose";
const nativeschema = new Schema({
    pold:{
        type:String,
        required:true
    },
    pols:{
        type:String,
        required:true
    }
})
 const Nativedetail=models.Nativedetail||mongoose.model("Nativedetail",nativeschema);
 export default Nativedetail;
