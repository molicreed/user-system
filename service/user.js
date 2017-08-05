const User = require('./sql').user
const bcrypt = require('./bcrypt')

const saltRounds = 10

module.exports = {
    addUser: (name, password)=>{
        return bcrypt.hash(password)
            .then(hash=>User.create({
                id: null,
                name: name,
                password: hash,
                crypt: 1
            })).then(p=>{
                console.log('created P', p.dataValues)
                return p
            })

    },
    findUser: (name, password)=>{
        return User.findAll({
            where: {
                name: name
            }
        }).then(users=>{
            if (users && users.length>0){
                let data = users[0].dataValues
                console.log(data)
                return bcrypt.compare(password, data.password).then(res=>{
                    if (res){
                        return data.id
                    } else {
                        return null
                    }
                })
            } else {
                console.log(users)
                return null
            }
        })
    }
}