import mongoose  from  "mongoose";
export  async function connectmongodb(){
try{
await mongoose.connect('mongodb+srv://passport1234:passport2345@cluster0.lx79lom.mongodb.net/puser',{useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db is connected")})

}
catch(error){
console.log("db is not connected")
}
}