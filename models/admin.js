const mongoose=require('mongoose');

const AdminUser= new mongoose.Schema({
    username:String,
    
});

module.exports=AdminUser;