const userQuery=require('../queries/queries');
const bcrypt=require('bcrypt');

const postUser=async(body)=>{
    try{
      const{userId,password,role,logoImage,welcomeImage,AccountName,AccountType,AccountStatus}=body;
       const hashPass=await bcrypt.hash(password,10);
       const userDet={userId,password:hashPass,role:role,logoImage,welcomeImage,AccountName,AccountType,AccountStatus};
       const userDetails=await userQuery.postUser(userDet);
       return userDetails;
    }
    catch(error){
        throw error;
    }
}

const postDynamicUser=async(body)=>{
    try{
        const userDetails=await userQuery.postDynamicUser(body);
        return userDetails;
     }
     catch(error){
         throw error;
     }
}

const GetUserStatusPWmethod=async(body)=>{
    try{
        const {userId,password}=body;
        const user=await userQuery.findUser(userId);
        if(!user){
            return 'Invalid userId'
        }
        const comparePass=await bcrypt.compare(password,user.password);
        if(!comparePass){
             return 'Invalid password'
        }
        return 'Success';
    }
    catch(error){
        throw error;
    }
}

const getUserRole=async(userId)=>{
    try{
    const userRole=await userQuery.findUser(userId);
    if(!userRole){
        return 'Fail'
    }
    return userRole.role
}
catch(error){
    throw error;
}
}

const getUserAcount=async(userId)=>{
    try{
        const userAccount=await userQuery.findUser(userId);
        if(!userAccount){
            return 'Fail'
        }
        const AccountName= userAccount.AccountName;
        const AccountType=userAccount.AccountType;
        const AccountStatus=userAccount.AccountStatus;
        return {AccountName,AccountType,AccountStatus};
    }
    catch(error){
        throw error;
    }
    }
    
const getLogoImage = async (userId) => {
        try {
          const user=await userQuery.findUser(userId);
          if(!user){
            return 'user not found'
          }
          const logoImage=user.logoImage;
          if(!logoImage){
            return 'Image not found'
          }
          return logoImage;
        } catch (error) {
          throw error;
        }
      };
      
    const getWelcomeImage = async (userId) => {
        try {
            const user=await userQuery.findUser(userId);
            if(!user){
              return 'user not found'
            }
            const welcomeImage=user.welcomeImage;
            if(!welcomeImage){
              return 'Image not found'
            }
            return welcomeImage;
          } catch (error) {
            throw error;
          }
        };

const postImage=async(body)=>{
    try{
        const image=await userQuery.postImage(body);
        return image;
    }
    catch(error){
        throw error;
    }
}

const getAccStatus=async(AccountName)=>{
    try{
        const userAccount=await userQuery.findAccount(AccountName);
        if(!userAccount){
            return 'Account not found'
        }
        return userAccount.AccountStatus;
    }
    catch(error){
        throw error;
    } 
}

const GetPermission=async(userId)=>{
    try{
        const user=await userQuery.findUser(userId);
        if(!user){
            return 'No user found'
        }
        const role=user.role;
        
        if(role==='admin'){
         const permissions=["read","write","update","delete"] ;
            return permissions;
        }
        else if(role==='user'){
            const permissions=["read"] ;
            return permissions;
        }
        else{
            return 'Fail'
        }
        
    }
    catch(error){
        throw error;
    }
}
module.exports={
    postDynamicUser,postUser,GetUserStatusPWmethod,getUserRole,getUserAcount,getLogoImage,
    getWelcomeImage,postImage,getAccStatus,GetPermission
}