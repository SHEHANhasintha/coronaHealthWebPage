let mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('useCreateIndex', true);
let dbServer = process.env.DBSERVER_LOGINS

class Database{
	constructor(dbSer){
		this._connect();
	}

_connect() {
     mongoose.connect(`${dbServer}`, {useNewUrlParser: true, useUnifiedTopology: true})
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
