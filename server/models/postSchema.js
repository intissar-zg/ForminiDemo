const mongoose=require('mongoose')
const schema=mongoose.Schema();
const postSchema = new mongoose.Schema ({
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('post',postSchema)