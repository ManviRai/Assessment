const dynamicService=require('../service/dynamicService');

const getTableValue=async(req,res)=>{
    try{
            const columnNames=req.params.columnNames;
            const getTableValues=await dynamicService.getTableValue(columnNames);
            return res.status(200).send(getTableValues);
    }
    catch(error){
       return res.status(500).send('FAIL');
    }
}

const getRowValue=async(req,res)=>{
    try{
            const rowNames=req.params.rowNames;
            const getRowValues=await dynamicService.getRowValue(rowNames);
            return res.status(200).send(getRowValues);
    }
    catch(error){
       return res.status(500).send('FAIL');
    }
}

const getValue=async(req,res)=>{
    try{
    const rowNames=req.params.rowNames;
    const columnNames=req.params.columnNames;
    const getCellValues=await dynamicService.getRowValue(rowNames,columnNames);
    return res.status(200).send(getCellValues);
}
catch(error){
return res.status(500).send('FAIL');
}
}

module.exports={
/**
 * @swagger
 * /getColumnValues/{columnNames}:
 *   get:
 *     summary: Get values from a specific table column.
 *     description: Use this API to retrieve values from a specified column in the table.
 *     tags:
 *       - Table Values
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: columnNames
 *         description: The name of the column for which values are requested.
 *         required: true
 *         schema:
 *           type: string
 *           example: "column2"
 *     responses:
 *       200:
 *         description: Table values retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid column name provided.
 *       500:
 *         description: Internal Server Error.
 */
    getTableValue,
/**
 * @swagger
 * /getRowValues/{rowNames}:
 *   get:
 *     summary: Get values from a specific table row.
 *     description: Use this API to retrieve values from a specified row in the table.
 *     tags:
 *       - Table Rows
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: rowNames
 *         description: The name of the row for which values are requested.
 *         required: true
 *         schema:
 *           type: string
 *           example: "row1"
 *     responses:
 *       200:
 *         description: Row values retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid row name provided.
 *       500:
 *         description: Internal Server Error.
 */    
    getRowValue,
/**
 * @swagger
 * /getValue/{rowNames}/{columnNames}:
 *   get:
 *     summary: Get value from a specific table cell.
 *     description: Use this API to retrieve the value from a specified cell in the table.
 *     tags:
 *       - Table Cells
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: rowNames
 *         description: The name of the row for which value is requested.
 *         required: true
 *         schema:
 *           type: string
 *           example: "row1"
 *       - in: path
 *         name: columnNames
 *         description: The name of the column for which value is requested.
 *         required: true
 *         schema:
 *           type: string
 *           example: "column2"
 *     responses:
 *       200:
 *         description: Cell value retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid row or column name provided.
 *       500:
 *         description: Internal Server Error.
 */
    getValue
}