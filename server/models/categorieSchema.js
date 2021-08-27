const mongoose=require('mongoose')
const schema=mongoose.Schema();
const categorieSchema = new mongoose.Schema ({
    
    categorieName: {
        type: String,
        required: true
    },
    categoriePic: {
        type: String,
        required: true
    },
},
{ timestamps : { createdAt: 'created_at'}})

module.exports=mongoose.model('categorie',categorieSchema)