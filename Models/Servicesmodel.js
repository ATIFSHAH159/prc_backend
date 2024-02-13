import mongoose from "mongoose";

const ServiceSchema=new mongoose.Schema({
    name:{type:String,required:true},
    message:{type:String,required:true},
    pic:{type:String,required:true},
});

const ServiceSchemamodel=mongoose.model("Service",ServiceSchema);
export default ServiceSchemamodel;