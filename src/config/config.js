require('dotenv').config()

console.log(process.env)

module.exports = {
    port: process.env.PORT,
    db: process.env.DB
}