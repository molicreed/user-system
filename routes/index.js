const router = require('express').Router()
const jwt = require('../service/token')

//拦截所有请求
router.use('/',(req, res, next)=>{
    console.log(req.method, '--', req.url)
    console.log('Cookies: ',req.cookies)
    next()
})

router.use('/register', require('./register'))

router.use('/login', require('./login'))

router.use('/', (req, res, next)=>{
    let {cookies} = req
    if (Object.keys(cookies).length == 0){
        return res.redirect('/login')
    }
    let userData = jwt.verify(cookies.token)
    console.log('验证 token: ',userData)
    if (userData){
        req.userInfo = userData
        return next()
    } else {
        return res.redirect('/login')
    }
} ,require('./web'))


module.exports = router