import mongoose from "mongoose";

const BlogScheme=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    pic:{type:String,required:true}
});

export const BlogSchememodel=mongoose.model("Blog",BlogScheme);