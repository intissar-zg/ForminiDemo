const express = require('express')
const router = express.Router();
const{addPost,getPosts}=require('../controllers/post');
const { authMiddleware } = require('../middleware/userAuth');

router.post('/newpost',authMiddleware,addPost)
router.get('/',getPosts)



module.exports = router;