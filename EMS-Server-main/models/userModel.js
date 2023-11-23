// const mongoose = require("mongoose");

// const userSchema =new mongoose.Schema({
// //     Name:{
// //         type:String,
// //         required:[true,"please enter your name"],
// //         maxLength:[30,"name cannot exceed 30 characters"],
// //         minLength:[4,"Name should have more than 4 characters"],
// //     },
// //     Voter_ID:{
// //         type:String,
// //         // required:[true,"Please enter your Email"],
// //         // unique:true,
// //         // validate:[validator.isEmail,"Please enter a valid Email"],
// //     },
// //     Password:{
// //         type:String,
// //         required:[true,"please enter your password"],
// //         minLength:[8,"password should have more than 8 characters"],
// //         select:false,
        
// //     },
// //     role:{
// //         type:String,
// //         default:"user",
// //     }
// Voter_ID:String,

// DOB: Date,
// Contact_No: String,
// Address: String,
// State: String,
// City: String,
// PIN: String,
// Password: String,
// Roles: [String],
//  });

// module.exports=mongoose.model("user",userSchema);
// // module.exports = userSchema;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  Voter_ID: {
    type: String,
    required: [true, "Please enter your Voter ID"],
    unique: true,
    validate: {
      validator: function (value) {
        // Custom validation function for Voter_ID (replace with your validation logic)
        // For example, you can check if it's a valid format for a Voter ID
        // This is just a placeholder, replace it with your actual validation logic
        return /^your_regex_pattern_here$/.test(value);
      },
      message: "Please enter a valid Voter ID",
    },
  },
  Password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should have more than 8 characters"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  DOB: Date,
  Contact_No: String,
  Address: String,
  State: String,
  City: String,
  PIN: String,
  Roles: [String],
});

module.exports = mongoose.model("user", userSchema);
