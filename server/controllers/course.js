const Course = require('../models/courseSchema')

exports.add_Course = async (req,res) => 
{
try {
    const {Title,Description,Content,Categorie} = req.body;
    const newCourse=new Course({Title,Description,categorie:Categorie,Content,owner:req.userId})
    
const course=await newCourse.save()
res.status(200).json(course)
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
}
exports.get_Course=async (req,res)=>
{
    try {
        const courses = await Course.find({}).populate('owner', '-password -__v').select('-__v').populate('categorie', '-__v')
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({message:`no Courses:${error}`})
    }
    
}
exports.get_Course_ByInstr=async (req,res)=>
{
    try {
        const courses = await Course.findById({_id: req.params.id});
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({message:`no Courses:${error}`})
    }
    
}
 exports.delete_Course = async (req,res)=>
{
    try {
        const courses = await Course.findByIdAndDelete({_id: req.params.id});
        /*res.status(200).json(courses)*/
        res.json({ msg: "courses was deleted" });
    } catch (error) {
        res.status(500).json({message:`no Course deleted:${error}`})
    }
    
}