import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import controller from './controller'

const app = express();

mongoose.connect('mongodb://localhost:27017/pets',()=>{
    console.log('DB initialized')
});
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/', controller);

app.listen(8080, ()=>{
    console.log('server is running')
});