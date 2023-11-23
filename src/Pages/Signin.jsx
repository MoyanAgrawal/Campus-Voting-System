import axios from 'axios';
import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Lock } from '@mui/icons-material';

function Signin({ setAuth }) {
	const [voterID, setVoterID] = useState("");
	const [password, setPassword] = useState("");

	async function handle_signin(e) {
		e.preventDefault();

		if (voterID.trim() && password.trim()) {
			axios({
				method: 'post',
				url: '/auth/signin',
				data: {
					voter_id: voterID,
					password: password
				}
			})
				.then(res => {
					localStorage.setItem('token', res.data);
					setAuth(res.data);
				})
				.catch(e => {
					localStorage.removeItem('token');
					setAuth(null);
					alert(e.response.data);
				})
		}
		else alert("Enter valid details");
	}

	return (
	  <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
	  <h1 className="text-blue-500 text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
			<AccountCircle /> Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
			<Lock /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <a href="/signup" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
	)
}

export default Signin