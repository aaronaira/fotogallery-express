const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true }).then(connection => {
            this.connection = connection;
            console.log('connection with DB success');
        }).catch(err => console.log(err))
    }
}