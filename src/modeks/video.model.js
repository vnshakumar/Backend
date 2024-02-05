import mongoose from "mongoose";

const  VideoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{

        type: String,//cloudinary url
        required:true
    },
    title: { 
        type: String, 
        required: true 
    },
    description: {
        type: String,
        required:true,
        default: "",
        },
    duration:{
        type:String,
        required:true
    }
    ,
    views:{
        type : Number,
        default:0
    },
    isPublished:{
        type:  Boolean,
        default: true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true});

export const Video=mongoose.model("Video",VideoSchema);