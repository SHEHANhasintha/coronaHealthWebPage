let EmailModel = require('./loginModel')
let mongoose = require('mongoose')
//var Athlete = mongoose.model('Athlete', EmailModel);


let transever =  (em,pass,token,fn,ln,ag,next) => {return(new Promise(async (resolve,reject) => {
		let msg = new EmailModel({
			email: em,
			password: pass,
			token: token,
			firstName: fn,
			lastName: ln,
			agreement: ag
		})
		await msg.save()
		   .then(doc => {
		   	 next(`success fully stored \n${doc}`)
		     resolve(true)
		   })
		   .catch(err => {
		   	 next(`error occured at ${em + ' transever ' +  err}`)
		     resolve(false)
		   })
	})

)}

let retrive =   (email,password) => {return(new Promise(async (resolve,reject) => {
		var details = {
			'email' : email.trim()
		}

		await EmailModel.findOne(details,function(err,users){
			if (err) {
				resolve("error occured")
			}
			if (users != null){
				resolve(users)
			} else {
				resolve(false)
			}
			
		}
	)}

))}





module.exports = {transever,retrive};


