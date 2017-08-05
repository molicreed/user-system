const router = require('express').Router()


router.use('/', (req, res, next)=>{
    console.log(req.method, '--', req.url)
    next()
}, require('./web'))

router.use('/login', require('./login'))
router.use('/register', require('./register'))

module.exports = router