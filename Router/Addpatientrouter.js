import express, { Router } from 'express';
import { deletepatient, getpatient, postpatient, updatepatient } from '../Controller/Patientcontroller.js';

const router=express.Router();

router.post("/",postpatient);

router.get("/",getpatient);

router.delete("/:patientid",deletepatient);

router.put("/:id",updatepatient);


export default router;