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
		   	 next(`successfully stored \n${doc}`)
		     resolve(true)
		   })
		   .catch(err => {
		   	 next(`error occured at ${em + ' transever ' +  err}`)
		     resolve(false)
		   })
	})

)}

let retrive =   (email) => {return(new Promise(async (resolve,reject) => {
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


let updateData =   (em,pass,token,firstName,lastName,agreement) => {return(new Promise(async (resolve,reject) => {
		let details = {
			'email' : em.trim()
		}

		let updateDetails = {
			password : pass,
			token : token,
			firstName : firstName,
			lastName : lastName,
			agreement : agreement
		}

		let entries = Object.keys(updateDetails)
		entries.forEach((data) => {
			if(updateDetails[data] == null){
				delete updateDetails[data];
			}else{
				if (typeof(updateDetails[data]) === "string"){
					updateDetails[data] = updateDetails[data].trim();
				}
			}
		})

		await EmailModel.updateOne(details, updateDetails, function(err,result) {
		    if (err) {
		      console.log(err);
		      reject(err);
		    } else {
		      resolve(result);
		    }
		  })
	}

))}

let deleteData =   (email,password) => {return(new Promise(async (resolve,reject) => {
		var details = {
			'email' : email.trim()
		}

		await EmailModel.deleteMany(details, function (err) {
			  if(err) 
			  	reject(err);
			  else{
			  	console.log("Successful deletion");
			  	resolve(true)
			  }
			})
	}

))}




module.exports = { transever, retrive, updateData, deleteData };


