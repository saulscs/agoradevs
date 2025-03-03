const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcript = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult} = require('express-validator/check');

const User = require('../../models/User')

//@route  GET api/auth 
// @desc  Test Route
// @acces Public 

router.get('/', auth, async  (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  POST api/auth
// @desc  Authenticate User & get token 
// @acces Public 

router.post('/',[ 
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is requiere').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors. array()});
    }

    const {email, password} = req.body;

    try {
    //if user exit
    let user = await User.findOne({email}); 

    if (! user) {
       return res
       .status(400)
       .json( {errors: [{msg: 'Invalid credential'}] } );
    }
     
    const isMatch = await bcript.compare(password, user.password);

    if(!isMatch){  
        return res
       .status(400)
       .json( {errors: [{msg: 'Invalid credential'}] } );
    }

    //Return jsonwebtoken

    const payload = {
        user: {
            id: user.id
        }
    };
    jwt.sign(
        payload, 
        config.get('jwtSecret'),
        {expiresIn: 36000000},
        (err, token) => {
            if (err) throw err;
            res.json({ token })
        });

    
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }        
});

module.exports = router;