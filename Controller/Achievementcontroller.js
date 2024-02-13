import { AchievementSchememodel } from '../Models/Addachievementsmodel.js'


export const postachievements=async(req,res)=>{
    const{title,description}=req.body;
    try{
              const newachievements=new AchievementSchememodel({
            title,
            description
              });
              const saveachievement=await newachievements.save();
              console.log(saveachievement);
              res.json({ Response: true, message: "Achievement added successfully" });
              console.log("Achievement added successfully");
            } catch (error) {
              console.error(error);
              res.status(500).json({ Response: false, message: "Error adding Achievement"});
            }
          }


          export const getachievements=async(req,res)=>{
            try{
             const getachievementdata=await AchievementSchememodel.find();
             res.json(getachievementdata);
             console.log(getachievementdata);
            }
            catch(error)
            {
             console.error(error);
            }
           }


           export const deleteachievement=async(req , res)=>{
            try{
                const {achid} = req.params;
                console.log("delete achievement with id",achid);
                await AchievementSchememodel.findByIdAndDelete(achid);
                res.json({message:"delete successfully"});
                res.status(500).json({error:"internal server error"})
        
            }
            catch (error){
                console.error("error delete Achievement",error);
            }
        }

        export const updateachievement = async (req, res) => {
          const { id } = req.params;
          const { title,description } = req.body;
          try {
            const updatedachievement = await AchievementSchememodel.findByIdAndUpdate( id,  { title,description }, { new: true });
            res.json(updatedachievement);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
        };