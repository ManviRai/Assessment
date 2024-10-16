const {dynamicUserModel}=require('../models/dynamicUsers.model');

const getValue=async(columnNames)=>{
    try{
        const getValue=await dynamicUserModel.findOne({columnNames:columnNames});
        return getValue;
    }
    catch(error){
        throw error;
    }
}
const getRowValue=async(rowNames)=>{
    try{
        const getRowValue=await dynamicUserModel.findOne({rowNames:rowNames});
        return getRowValue;
    }
    catch(error){
        throw error;
    }
}

const getValues=async(rowNames,columnNames)=>{
    try{
        const value=await dynamicUserModel.find(rowNames,columnNames);
        return value;
    }
    catch(error){
        throw error;
    }
}


module.exports={
    getValue,getRowValue,getValues
}