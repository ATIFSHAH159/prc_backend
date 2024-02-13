import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name:{type: String , required: true}, 
    fathername:{type: String , required: true}, 
    date: { type: Date, required: true },
    gender:{ type: String, required: true },
    age: { type: Number, required: true },
    description:{ type: String, required: true },
    fee: { type: Number, required: true },
    totalcharges:{ type: Number, required: true },
  });
  

const patientSchemamodel = mongoose.model("Patient", patientSchema);

export default patientSchemamodel;