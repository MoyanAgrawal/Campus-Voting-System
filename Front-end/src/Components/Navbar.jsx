import React from 'react';
import { Link } from 'react-router-dom';
import BallotIcon from '@mui/icons-material/Ballot';

function Navbar({ setAuth }) {
	async function handle_signout() {
		localStorage.removeItem('token');
		setAuth(null);
	}

	return (
		<nav className='w-full px-4 py-2 bg-[#4361ee] text-white flex place-items-center gap-x-6 sticky top-0 shadow-md'>
			<span className='text-2xl'>
				<a href="/" className='hover:text-lg'><BallotIcon fontSize="large"/></a>
			</span>
			<Link className='hover:text-[#333533] text-lg' to="/"> Home </Link>
			<Link className='hover:text-[#333533] text-lg' to="/profile"> Profile </Link>
			<Link className='hover:text-[#333533] text-lg' to="/manage-poll"> Manage&nbsp;Poll </Link>
			<Link className='hover:text-[#333533] text-lg' to="/manage-user"> Manage&nbsp;User </Link>
			<div className='w-full'></div>
			{/* <button onClick={handle_signout}> Signout </button> */}
			<button onClick={handle_signout} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">SignOut</button>
		</nav>
	)
}

export default Navbar