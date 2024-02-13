import { BlogSchememodel } from "../Models/Addblogmoodel.js";

export const postblog=async(req,res)=>{
    const{title,content,pic}=req.body;
    try{
       const newblog=new BlogSchememodel({
        title,
        content,
        pic:req.file.path,
       });
       const saveblog=await newblog.save();
       console.log(saveblog);
       res.json({Response:true,message:"Blog Added Successfully"});
       console.log("Blog Added Successfully");
    }
    catch(error){
      console.error(error);
      res.status(500).json({ Response: false, message: "Blog Adding failed "});
    }
}

export const getblogs=async(req,res)=>{
  try{
   const getblogsdata=await BlogSchememodel.find();
   res.json(getblogsdata);
   console.log(getblogsdata);
  }
  catch(error)
  {
   console.error(error);
  }
 }


 export const deleteblog=async(req , res)=>{
  try{
      const {blogid} = req.params;
      console.log("delete blog with id",blogid);
      await BlogSchememodel.findByIdAndDelete(blogid);
      res.json({message:"delete successfully"});
      res.status(500).json({error:"internal server error"})

  }
  catch (error){
      console.error("error delete Blog",error);
  }
}

export const updateblog = async (req, res) => {
  const { id } = req.params;
  const { title,content } = req.body;
  try {
    const updatedblog = await BlogSchememodel.findByIdAndUpdate( id,  { title,content }, { new: true });
    res.json(updatedblog)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};