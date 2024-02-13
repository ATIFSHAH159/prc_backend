import express from 'express';
import { deleteservices, getservices, postservice, updateservice } from '../Controller/Servicescontroller.js';
import multer from 'multer';

const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post("/",upload.single('pic'),postservice);

router.get("/",getservices);

router.delete("/:serviceid",deleteservices);

router.put("/:id",updateservice);

export default router;