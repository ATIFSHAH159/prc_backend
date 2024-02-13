import express from 'express';
import {  postlogin } from '../Controller/Addlogincontroller.js';

const router=express.Router();

router.post("/",postlogin);


export default router;