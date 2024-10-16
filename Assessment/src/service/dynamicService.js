const dynamicQuery=require('../queries/dynamicQueries');

const getTableValue=async(columnNames)=>{
    try{
        const getValues=await dynamicQuery.getValue(columnNames);
        return getValues;
    }
    catch(error){
        throw error;
    }
}

const getRowValue=async(rowNames)=>{
    try{
        const getRowValues=await dynamicQuery.getRowValue(rowNames);
        return getRowValues;
    }
    catch(error){
        throw error;
    }
}

const getValue=async(rowNames,columnNames)=>{
    try{
        const rowName=await dynamicQuery.getValues(rowNames,columnNames);
        return rowName;     
    }
    catch(error){
        throw error;
    }
}

module.exports={
    getTableValue,getRowValue,getValue
}