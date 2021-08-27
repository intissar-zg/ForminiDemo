
const express = require('express')
const router = express.Router();
const{}=require('../controllers/categorie');
const{ add_Categorie,get_Categorie, delete_Categorie}=require('../controllers/categorie');


router.post('/newcategorie', add_Categorie)
router.get('/', get_Categorie)
router.delete('/deletecategorie/:id',delete_Categorie)
module.exports = router;

