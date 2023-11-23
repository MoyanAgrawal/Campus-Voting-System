const express = require('express')
const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const data=require('../models/userModel');
const { UserDB } = require('../DB');
const JWTSECRET = process.env.JWTSECRET||"HKJHSAK837H25403FHERBTC82BR872372846D234602946328R27R6293";

router.use(express.json());


router.post('/signin', async (req, res) => {
const { voter_id, password } = req.body; // Updated to use voter_id
  console.log(voter_id);


  UserDB.findOne({ Voter_ID: voter_id, password: password }) // Updated to use voter_id
  .then(data => {
	console.log('Data from the database:', data)
	if (data) {
	  const { Password, ...user } = data;
	  token = jsonwebtoken.sign({ user }, JWTSECRET, { expiresIn: '1h', algorithm: 'HS256' });
	  res.status(200).json(token);
	} else {
	  res.status(401).send("Invalid Credential");
	}
  });
})

module.exports = router
