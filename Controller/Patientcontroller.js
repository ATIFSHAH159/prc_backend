import patientSchemamodel from "../Models/Addpatientsmodel.js";

export const postpatient = async (req, res) => {
    const { name, fathername, date, gender, age, description, fee, totalcharges } = req.body;
  
    try {
      const patientsdata = new patientSchemamodel({
        name,
        fathername,
        date,
        gender,
        age,
        description,
        fee,
        totalcharges,
      });
  
      const savepatientdata = await patientsdata.save();
  
      console.log(savepatientdata);
      res.json({ Response: true, message: "Patient added successfully" });
      console.log("Patient added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json({ Response: false, message: "Error adding patient"});
    }
  };

  export const getpatient=async(req,res)=>{
   try{
    const getpatientdata=await patientSchemamodel.find();
    res.json(getpatientdata);
    console.log(getpatientdata);
   }
   catch(error)
   {
    console.error(error);
   }
  }


  export const deletepatient=async(req , res)=>{
    try{
        const {patientid} = req.params;
        console.log("delete patient with id",patientid);
        await patientSchemamodel.findByIdAndDelete(patientid);
        res.json({message:"delete successfully"});
        res.status(500).json({error:"internal server error"})

    }
    catch (error){
        console.error("error delete patient",error);
    }
}


export const updatepatient = async (req, res) => {
  const { id } = req.params;
  const { name, fathername,date,gender,age,description,fee,totalcharges } = req.body;
  try {
    const updatedpatient = await patientSchemamodel.findByIdAndUpdate( id,  { name,fathername,date,gender,age,description,fee,totalcharges }, { new: true });
    res.json(updatedpatient)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};