const User = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const userSchema = require('../model/userSchema')

//registeration
const register = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
        if (err) {
            res.status(400).json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
        user.save()
            .then(user => {
                res.json({
                    message: `user added sucessfully`
                })
            })
            .catch(error => {
                res.status(400).json({
                    message: `An error occured`
                })
            })
    })

}

//login process
const login = async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expireIn: '1h' })
                        res.json({
                            message: 'login successful'
                        })
                    }
                    else {
                        res.json({
                            message: `password does not match`
                        })
                    }
                })
            }
            else {
                res.json({
                    message: "no user found"
                })
            }
        })

}


module.exports = { register, login }