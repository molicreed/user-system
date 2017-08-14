const router = require('express').Router()

router.get('/', (req, res)=>{
    return res.render('./index')
})

router.get('/welcome', (req, res)=>{
    return res.render('./welcome',{
        username: req.userInfo.name || '111',
        id: req.userInfo.id || 'none'
    })
})

module.exports = router