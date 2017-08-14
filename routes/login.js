const router = require('express').Router()
const findUser = require('../service/user').find
const jwt = require('../service/token')
// const userDB = require()

router.get('/', (req, res) => {
    return res.render('./login')
})

router.post('/', (req, res) => {
    let { username, password } = req.body
    findUser(username, password).then(id => {
        if (id) {
            let token = jwt.sign({
                id,
                name: username
            })
            console.log(token)
            res.cookie('token',token,{
                httpOnly: true,
                maxAge: 86400000
            })
            res.redirect(`./welcome`)
        } else {
            res.end('username or password wrong')
        }
    }).catch(err => {
        console.error('error: ',err)
        res.end('system error')
    })
})

router.get('/off',(req, res)=>{
    res.clearCookie('token')
    res.redirect('/login')
})
module.exports = router