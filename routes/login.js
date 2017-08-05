const router = require('express').Router()
const findUser = require('../service/user').findUser
// const userDB = require()

router.get('/', (req, res) => {
    return res.render('./login')
})

router.post('/', (req, res) => {
    let { username, password } = req.body
    findUser(username, password).then(id => {
        if (id) {
            res.redirect(`./welcome?id=${id}&name=${res.name || ''}`)
        } else {
            res.end('username or password wrong')
        }
    }).catch(err => {
        console.log('reject')
        res.end('system error')
    })

})
module.exports = router