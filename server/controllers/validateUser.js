
const { body, validationResult } = require('express-validator');
const validateUser=[
    body('firstname').isAlpha(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
]
module.exports=validateUser