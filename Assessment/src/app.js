const express=require('express');
require('dotenv').config({path:"./config/dev.env"})
const bodyParser=require('body-parser');
require('./db/mongoose')
const contextPath="/rest/api";
const{router}=require('./routers/router');

const app=express();
require('./swagger/swagger')(app);
app.use(bodyParser.json());
app.use(contextPath,router);

port=process.env.PORT;

app.listen(port,()=>{
    console.log(`port connected to ${port}`);
    
})
