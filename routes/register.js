const router = require('express').Router()
const addUser = require('../service/user').addUser
// const userDB = require()

router.get('/', (req, res) => {
    return res.render('./register')
})

router.post('/', (req, res) => {
    let { username, password } = req.body
    addUser(username, password).then(result=>{
        if (result){
            res.redirect('/login')
        } else {
            res.end('注册失败')
        }
    }).catch(err=>console.log(err))

})

module.exports = router