import * as mongoose from 'mongoose';

export const blogschema = new mongoose.Schema({
    title:{
        String,
        required:true,
    },
    discription:{
        String
        
    },
    body:{
        String,
        required:true
    },
    postedon:{
        String
    }
})