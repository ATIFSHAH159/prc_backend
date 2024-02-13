import Express from 'express';
import { deleteachievement, getachievements, postachievements, updateachievement } from '../Controller/Achievementcontroller.js';

const router=Express.Router();

router.post("/",postachievements);
router.get("/",getachievements);
router.delete("/:achid",deleteachievement);
router.put("/:id",updateachievement);

export default router;