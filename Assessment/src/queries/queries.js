const {userModel}=require('../models/users.model');
const {dynamicUserModel}=require('../models/dynamicUsers.model');


const postUser=async(body)=>{
    try{
       const userDetail=await new userModel(body).save();
       return userDetail;
    }
    catch(error){
        throw error;
    }
}

const postDynamicUser=async(body)=>{
    try{
        const userDetail=await new dynamicUserModel(body).save();
        return userDetail;
     }
     catch(error){
         throw error;
     }
}

const GetUserStatusPWmethod=async(body)=>{
    try{
        const Getuser=await userModel.find(body);
        return Getuser;
    }
    catch(error){
        throw error;
    }
}

const findUser=async(userId)=>{
    try{
        const findUserByvalue=userModel.findOne({userId:userId})
        return findUserByvalue;
    }
    catch(error){
        throw error;
    }
}


  const postImage=async(body)=>{
    try{
       const imageDet=await new imageData(body).save()
       return imageDet;
    }
    catch(error){
        throw error;
    }
}

const findAccount=async(AccountName)=>{
    try{
        const findAccName=userModel.findOne({AccountName:AccountName})
        return findAccName;
    }
    catch(error){
        throw error;
    }
}

module.exports={
    postUser,postDynamicUser,GetUserStatusPWmethod,findUser,postImage,findAccount
}