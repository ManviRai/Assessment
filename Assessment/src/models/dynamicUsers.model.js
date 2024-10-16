const mongoose=require('mongoose');
const dynamicUserTable=new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    tableName:{
        type:String,
        required:true
    },
    rowNames:{
        type:String,
        required:true
    },
    columnNames:{
        type:String,
        required:true
    },
    values:{
        type:String,
        required:true
    }

})
const dynamicUserModel=mongoose.model('DynamicTable',dynamicUserTable);
module.exports={
    dynamicUserModel
}