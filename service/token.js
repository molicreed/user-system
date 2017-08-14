const jwt = require('jsonwebtoken')
const KEY = 'this is a long json web token key'

module.exports = {
    sign: data=>{
        data.time = Date.now()
        let token = jwt.sign(data, KEY)
        return token
    },
    verify: token=>{
        let decode = jwt.verify(token, KEY)
        return decode
    },
}


