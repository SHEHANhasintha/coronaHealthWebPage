let EmailModel = require('./loginModel')
let mongoose = require('mongoose')
//var Athlete = mongoose.model('Athlete', EmailModel);


let transever =  (em,pass,next) => {return(new Promise(async (resolve,reject) => {
		let msg = new EmailModel({
			email: em,
			password: pass
		})
		await msg.save()
		   .then(doc => {
		     resolve(next(`success fully stored \n${doc}`))
		   })
		   .catch(err => {
		     resolve(next(`error occured at ${em + ' transever ' +  err}`))
		   })
	})

)}

let retrive =   (email,password) => {return(new Promise(async (resolve,reject) => {
		var details = {
			'email' : email.trim(),
			'password' : password.trim()
		}
		await EmailModel.findOne(details,function(err,users){
			if (err) {
				resolve("error occured")
			}
			if (users != null){
				resolve(true)
			} else {
				resolve(false)
			}
			
		}
	)}

))}



module.exports = {transever,retrive};


