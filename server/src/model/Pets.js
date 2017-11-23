import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const newPets = new Schema({
    species : {type : String, required : false},
    name : {type : String, required : false},
    address : {type : String, required : false},
    email : {type : String, required : false},
    number : {type : String, required : false},
    breed : {type : String, required : false},
    size : {type : String, required : false},
    sexe : {type : String, required : false},
    age : {type : String, required : false},
    photo : {type : String, required : false}
}, {versionKey:false})

export default mongoose.model('Pets', newPets)
