const mongoose=require('mongoose');
const mong=mongoose.connect(process.env.MONGO);
if(mong){
    console.log("db connected");   
}
