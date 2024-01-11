import mongoose  from  "mongoose";
export  async function connectmongodb(){
try{
await mongoose.connect(proces.env.MONGO_DB,{useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db is connected")})

}
catch(error){
console.log("db is not connected")
}
}