const express= require('express')
const router = express.Router()
const {authenticateUser} = require('../app/middleware/authentication')
const tasksController = require('../app/controllers/tasksController')



const usersController = require('../app/controllers/usersController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser,usersController.account)
router.delete('/users/logout',usersController.logout)


router.get('/tasks',tasksController.list)
router.post('/tasks',tasksController.create)
router.get('/tasks/completed',tasksController.completed)
router.get('/tasks/:id',tasksController.show)
router.delete('/tasks/:id',tasksController.destroy)
router.put('/tasks/:id',tasksController.update)




module.exports = router