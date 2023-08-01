const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../model/posts')



router.get('/all', (req, res) => {
    posts.getAll()
        .then(result => {
            res.send(result)
        })
})


router.post('/new', bodyParser.json(), (req, res) => {
    let { title, description } = req.body

    posts.newPosts(title, description)
    res.send('Post adcionado')
})

module.exports = router