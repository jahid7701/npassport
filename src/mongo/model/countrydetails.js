import mongoose, { Schema, models }  from "mongoose";
const countryschema = new Schema({
    states:{
        type:String,
        required:true
    },
    csta:{
        type:String,
        required:true
    }
})
 const Countrydetail=models.Countrydetail||mongoose.model("Contrydetail",countryschema);
 export default Countrydetail;
