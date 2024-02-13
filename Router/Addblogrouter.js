import express from 'express';
import multer from 'multer';
import { deleteblog, getblogs, postblog, updateblog } from '../Controller/Addblogcontoller.js';

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

router.post("/",upload.single('pic'),postblog);
router.get("/",getblogs);
router.delete("/:blogid",deleteblog);
router.put("/:id", updateblog);

export default router;