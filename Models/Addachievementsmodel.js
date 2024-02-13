import mongoose from 'mongoose';

const AchievementScheme=new mongoose.Schema({
    title:{type:String,required: true},
    description:{type:String,required:true}
})

export const AchievementSchememodel=mongoose.model("Achievement",AchievementScheme);