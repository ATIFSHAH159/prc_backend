import ServiceSchemamodel from "../Models/Servicesmodel.js";


export const postservice=async(req,res)=>{
    const{name,message,pic}=req.body;
try{
    const newservices=new ServiceSchemamodel({
        name,
        message,
        pic:req.file.path,
    });
    const saveservices=await newservices.save();
    console.log(saveservices);
    res.json({Response:true,message:'Service added'});
    console.log("Service Added");
}
catch(error){
    console.error(error);
    res.status(500).json({ Response: false, message: "Service Adding failed "});
}
}


export const getservices=async(req,res)=>{
    try{
     const getservicesdata=await ServiceSchemamodel.find();
     res.json(getservicesdata);
     console.log(getservicesdata);
    }
    catch(error)
    {
     console.error(error);
    }
   }


   export const deleteservices=async(req , res)=>{
    try{
        const {serviceid} = req.params;
        console.log("delete Service with id",serviceid);
        await ServiceSchemamodel.findByIdAndDelete(serviceid);
        res.json({message:"delete successfully"});
        res.status(500).json({error:"internal server error"})

    }
    catch (error){
        console.error("error delete Achievement",error);
    }
}


export const updateservice = async (req, res) => {
    const { id } = req.params;
    const { name,message } = req.body;
    try {
      const updatedservice = await ServiceSchemamodel.findByIdAndUpdate( id,  { name,message }, { new: true });
      res.json(updatedservice);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };