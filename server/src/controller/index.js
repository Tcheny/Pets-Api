import { Router } from 'express';
import Pets from '../model/Pets';
import multer from 'multer'; // upload image
import fs from 'fs'; // file Systeme

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../views/public/storageImg/')
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/add', upload.single('photo'), (req, res)=>{
   const newPets = new Pets(req.body);
   if(req.file){
      newPets.photo = `${req.file.filename}`
   }
   newPets.save((err)=>{
       err ? res.send(err) : res.redirect('http://localhost:3000')
   })
});

router.get('/', (req, res)=>{
    Pets.find((err, pets)=>{
        err ? res.send(err) : res.send(pets)
    });
});

router.get('/:id', (req, res)=>{
  Pets.findOne({_id: req.params.id}, (err, pet)=>{ // find id du pet
    if(pet.photo){ // check si il y a une photo
      fs.unlinkSync(`../views/public/storageImg/${pet.photo}`) // fait le chemin pour retirer la photo
    }
    Pets.findByIdAndRemove(req.params.id, (err)=>{
      err ? res.send(err) : res.redirect('http://localhost:3000')
    });
  })
});

router.post('/update/:id/',(req, res)=>{
    Pets.findByIdAndUpdate(req.params.id, req.body, (err, pet)=> {
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

export default router;
