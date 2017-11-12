import { Router } from 'express';
import Pets from '../model/Pets'

const router = Router();

router.post('/add', (req, res)=>{
    console.log(req)
   const newPets = new Pets(req.body);
   newPets.save((err)=>{
       err ? res.send : res.json({success : 'new pets'})
   })
})

export default router;