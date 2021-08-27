const Categorie = require('../models/categorieSchema')

exports.add_Categorie = async (req,res) => 
{
try {
    const {categorieName,categoriePic} = req.body;
    const newCategorie = new Categorie({categorieName,categoriePic});
    
const categorie=await newCategorie.save()
res.status(200).json(categorie)
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
}
exports.get_Categorie=async (req,res)=>
{
    try {
        const categories = await Categorie.find({}).select('-__v');
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message:`no Categories:${error}`})
    }
    
}

 exports.delete_Categorie = async (req,res)=>
{
    try {
        const categories = await Categorie.findByIdAndDelete({_id: req.params.id});
     
        res.json({ msg: "categorie was deleted" });
    } catch (error) {
        res.status(500).json({message:`no categorie deleted:${error}`})
    }
    
}