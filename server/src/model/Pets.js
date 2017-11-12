import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const newPets = new Schema({
    name : {
        type : String,
        required : true
    },
    race : {
        type : String,
        required : true
    }
},{versionKey:false})

export default mongoose.model('Pets', newPets)