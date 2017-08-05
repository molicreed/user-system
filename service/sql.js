const Sequelize = require('sequelize')
const config = require('../config/db')


let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

let User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING(50),
    password: Sequelize.STRING(100),
    crypt: Sequelize.INTEGER
},{
    timestamps: false
})

module.exports = {
    user: User
}