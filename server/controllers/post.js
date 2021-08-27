const Post = require('../models/postSchema')




exports.addPost = async (req,res) => 
{
try {
    const {Title,Description,Content} = req.body;
    const newPost=new Post({Title,Description,Content,owner:req.userId})
    
const post=await newPost.save()
res.status(200).json({post})
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
}
exports.getPosts=async (req,res)=>
{
    try {
        const posts=await Post.find({}).populate('owner', '-password -__v').select('-__v');
        res.status(200).json({posts})
    } catch (error) {
        res.status(500).json({message:`something wrong:${error}`})
    }
}