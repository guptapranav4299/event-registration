const express=require('express');
const srv=express();
const path=require('path');
const indexRoute=require('./routes/index');
const adminRoute=require('./routes/admin');


// fetch from public folder


// for handling post request
srv.use(express.json());
srv.use(express.urlencoded({extended:true}));


srv.use('/', express.static(path.join(__dirname, 'public')));
srv.use('/form',indexRoute);
srv.use('/login',adminRoute);




// change when deploying 
const port= 3000 || process.env.port 

srv.listen(3000,()=>{
    console.log("Server running at port 3000");
});
