import mongoose from 'mongoose';

const LoginSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},

});

const LoginSchemamodel=mongoose.model("Login",LoginSchema);
export default LoginSchemamodel;