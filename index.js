import express  from "express";
import  cors  from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import patientrecord from './Router/Addpatientrouter.js';
import achievementrecord from './Router/Addachievementrouter.js';
import blogrecord from './Router/Addblogrouter.js';
import loginrecord from './Router/AddLogin.js';
import servicerecord from './Router/Servicerouter.js';


const app=express();

const url="mongodb+srv://pakrehabilitation:pakistan54321@cluster0.ipjue.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
.then(()=>console.log("connected to database"));

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded ({extended:true}));
app.use("/Forms/Patients",patientrecord);
app.use("/Forms/AddAchievements",achievementrecord);
app.use("/Forms/Addblogs",blogrecord);
app.use("/Registrationpage",loginrecord);
app.use("/Forms/Servicesform",servicerecord);
app.use("/AdminSide/Viewpatients",patientrecord);
app.use("/AdminSide/Viewachievements",achievementrecord);
app.use("/AdminSide/Viewblogs",blogrecord);
app.use("/AdminSide/Viewservices",servicerecord);
app.use("/Services",servicerecord);
app.use("/Blog",blogrecord);
app.use("/Achievements",achievementrecord);
app.use("/Home",servicerecord);
app.use("/Login",loginrecord);
app.use('/Images',express.static('Images'));
const Port=5100;
app.listen(Port,()=>{
    console.log(`Server is ruunig on port:${Port}`);
})