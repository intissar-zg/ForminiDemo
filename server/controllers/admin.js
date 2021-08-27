const Users = require("../models/userSchema");

require("dotenv").config({ path: "./config/.env" });

exports.getUsers = async (req,res) => 
{
try {
const admin=await Users.find() 
   // .populate("personnelId")
  res.status(200).json(admin)
}
 catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
}
};

exports.deleteUser = async (req,res)=>
{
    try {
        const admin = await Users.findByIdAndDelete({_id: req.params.id});
        /* res.status(200).json(admin) */
       res.json({ msg: "user was deleted" }); 
    } catch (error) {
        res.status(500).json({message:`no user deleted:${error}`})
    }
    
}



