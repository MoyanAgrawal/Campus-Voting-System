const { MongoClient } = require('mongodb');



const MONGODBURI ="mongodb+srv://gungunsharma206:9058424400@cluster0.eutldod.mongodb.net/cluster0?retrywrites=true&w=majority";
const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
//     Name:{
//         type:String,
//         required:[true,"please enter your name"],
//         maxLength:[30,"name cannot exceed 30 characters"],
//         minLength:[4,"Name should have more than 4 characters"],
//     },
//     Voter_ID:{
//         type:String,
//         // required:[true,"Please enter your Email"],
//         // unique:true,
//         // validate:[validator.isEmail,"Please enter a valid Email"],
//     },
//     Password:{
//         type:String,
//         required:[true,"please enter your password"],
//         minLength:[8,"password should have more than 8 characters"],
//         select:false,
        
//     },
//     role:{
//         type:String,
//         default:"user",
//     }
Voter_ID: {
    type:String
},
Name: {
    type: String
},
DOB: Date,
Contact_No: String,
Address: String,
State: String,
City: String,
PIN: String,
Password: String,
Roles: [String],
 });
//  const UserDB = mongoose.model("user", userSchema);
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
  };

// init mongoDB connection
const client = new MongoClient(MONGODBURI, options);

client.connect()
	.then(async () => {
		console.log("DB Connected Successfully");
	})
	.catch(err => console.log(err));

module.exports = {
	UserDB: client.db("EMS").collection("User"),
	PollDB: client.db("EMS").collection("Poll"),
};