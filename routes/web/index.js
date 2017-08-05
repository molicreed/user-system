const router = require('express').Router()

router.get('/', (req, res)=>{
    console.log(req.url)
    return res.render('./index')
})

router.get('/welcome', (req, res)=>{
    return res.render('./welcome',{
        username: req.query.name || '111',
        id: req.query.id || 'none'
    })
})

module.exports = router