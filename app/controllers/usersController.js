const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res)=> {
    const body = req.body
    const user = new User(body)
    user.save()
    
    bcryptjs.genSalt()
        .then((salt)=> {
            bcryptjs.hash(user.password, salt)
                .then((encrypted)=> {
                    user.password = encrypted
                    user.save()
                    .then((user) => {
                        res.json(user)
                    })
                    .catch((err)=> {
                        res.json(err)
                    })
                })
        })
}
// usersController.login = (req, res)=>{
//     const body=req.body

// }
usersController.login=(req,res)=>{
    const body = req.body
    User.findOne({ phone : body.phone})
        .then((user)=>{
            if(!user){
                res.json({
                    errors:'invalid phone number or password'
                })
            }
            bcryptjs.compare(body.password, user.password)
                .then((match)=> {
                    if(match){
                        const tokenData = {
                            _id : user._id,
                            username : user.username,
                            
                            phone: user.phone
                        }
                        const token = jwt.sign(tokenData, 'dct123', {expiresIn: '2d'})
                        res.json({
                            token: ` ${token}`
                        })
                    }else{
                        res.json({
                            errors :'invalid phone number or password'
                        })
                    }
                })
        })
}
usersController.account = (req, res,next)=>{
    res.json(req.user)
}
usersController.logout = (req,res) => {
    const {user} = req
    User.findByIdAndUpdate(user._id)
        .then(()=>{
            res.json('successfully logged out')
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports = usersController