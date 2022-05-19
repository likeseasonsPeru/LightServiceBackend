const UserModel = require("../models/User.model");
const bcryptjs = require('bcryptjs');
const { generateJWT } = require("../helpers/generate-jwt");

const loginController = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(!user) {
            return res.status(400).json({
                message: 'User / Password  not correct - Email'
            });
        }
        
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword) {
            return res.status(400).json({
                message: 'User / Password  not correct - Password'
            });
        }

        const token = await generateJWT(user.id)
        
        res.status(201).send({ message: 'User logged', data : {user, token} });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Failed Response'
        });
    }
    
    // res.json({user: body}
}

const registerController = async (req, res) => {
    const {username, email, password, role} = req.body
    const user = new UserModel({username, email, password, role});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    await user.save()
    res.status(201).json({ message: 'User created', data: {user} });
}

module.exports = {
    loginController,
    registerController
}