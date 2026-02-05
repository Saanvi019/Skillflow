import {Router} from "express";

const router=Router();

router.post("/",(req,res)=>{
    res.json(
        {
            week1:["html","css"],
            week2:["javascript"],
            week3:["react"]
        }
    )
})

export default router;