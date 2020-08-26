const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../app/middleware/authentication')
const usersController = require('../app/controllers/usersController')
const tasksController = require('../app/controllers/tasksController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)

router.get('/tasks',authenticateUser, tasksController.list)
router.get('/tasks/find',authenticateUser,tasksController.find)
router.post('/tasks',authenticateUser,tasksController.create)
router.get('/tasks/completed',tasksController.completed)
router.get('/tasks/:id',authenticateUser,tasksController.show)
router.delete('/tasks/:id',authenticateUser,tasksController.destroy)
router.put('/tasks/:id',authenticateUser,tasksController.update)


module.exports = router
