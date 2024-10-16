const mongoose=require('mongoose');
const userTable=new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    logoImage: {
        type: String,
      },
    welcomeImage: {
        type: String,
      },
    AccountName:{
        type: String,
        required:true
    },
    AccountType:{
        type:String
    },
    AccountStatus:{
        type:String
    }
    });

const userModel=mongoose.model('userTables',userTable);
module.exports={
    userModel
}