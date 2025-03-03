const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult} = require('express-validator/check');

const User = require('../../models/User');

//@route  POST api/users
// @desc  Register User
// @acces Public 

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors. array()});
    }

    const {name, email, password} = req.body;

    try {
    //if user exit
    let user = await User.findOne({email}); 

    if (user) {
       return res
       .status(400)
       .json( {errors: [{msg: 'Users already exists'}] } );
    }

    //Get user Gravatar
    const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
    })
    
    user =  new User({
        name,
        email,
        avatar,
        password 
    });

    //Encript password
    const salt = await bcript.genSalt(10);

    user.password = await bcript.hash(password, salt);

    await user.save();

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