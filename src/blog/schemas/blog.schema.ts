import * as mongoose from 'mongoose';

export const blogschema = new mongoose.Schema({
    title:{
       type:String,
        required:true,
    },
    discription:{
        type:String
        
    },
    body:{
        type:String,
        required:true
    },
    postedon:{
        type:String
    }
})