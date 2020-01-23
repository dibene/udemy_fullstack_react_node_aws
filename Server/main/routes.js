var express = require('express')
var router = express.Router()

router.get('/hello', (req, res) => {
    res.json("hii world")
})

module.exports = router