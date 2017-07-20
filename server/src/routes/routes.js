const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

/* GET home page. */
router.get('/', controllers.homePage)

router.get('/posts', controllers.getPosts)
router.post('/post/:id', controllers.updatePost)

router.get('/users', controllers.getUsers)

router.get('/comments', controllers.getComments)

module.exports = router
