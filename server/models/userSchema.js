const mongoose=require('mongoose')
const schema=mongoose.Schema();
const userSchema = new mongoose.Schema ({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    adress:{
        type:String,
      
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        //enum:['admin','instructor','student'],
        default:'student',
    },
    tel:{
        type:Number,
    },
    
})

module.exports=mongoose.model('user',userSchema)