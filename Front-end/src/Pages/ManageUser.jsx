import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import InputAdornment from '@mui/material/InputAdornment';

function ManageUser() {
	const [flag, setFlag] = useState(true);
	const [loading, setLoading] = useState("");

	const [userID, setUserID] = useState("");
	const [uID, setUID] = useState("");
	const [voterID, setVoterID] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [DOB, setDOB] = useState("");
	const [roles, setRoles] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [PIN, setPIN] = useState("");


	function reset_data() {
		setFlag(true);
		setLoading("");
		setVoterID("");
		setName("");
		setPassword("");
		setDOB("");
		setRoles("");
		setContactNo("");
		setAddress("");
		setCity("");
		setState("");
		setPIN("");
	}

	function validate_data() {
		if (!voterID.trim()) return false;
		if (!name.trim()) return false;
		if (!password.trim()) return false;
		if (!DOB.trim()) return false;
		if (isNaN(contactNo) || !contactNo <= 999999999) return false;
		if (!address.trim()) return false;
		if (!state.trim()) return false;
		if (!city.trim()) return false;
		if (isNaN(PIN) || !PIN <= 99999) return false;

		const arr = roles.replace(" ", "").split(",").filter(val => val !== "");
		if (arr.length !== roles.replace(" ", "").split(",").length) return false;

		return true;
	}

	async function handle_search(e) {
		e.preventDefault();

		if (userID.trim()) {
			setLoading("Loading User data...");
			axios("/admin/user/?voter_id=" + userID)
				.then(res => {
					setUID(res.data._id);
					setVoterID(res.data.Voter_ID);
					setName(res.data.Name);
					setPassword(res.data.Password);
					setAddress(res.data.Address);
					setCity(res.data.City);
					setDOB(moment(res.data.DOB).format("YYYY-MM-DD"));
					setState(res.data.State);
					setPIN(res.data.PIN);
					setContactNo(res.data.Contact_No);

					const _roles = res.data.Roles.reduce((prev, cur) => prev + ", " + cur, "");
					setRoles(_roles.substr(2, _roles.length - 2));

					setFlag(false);
					setLoading("");
				})
				.catch(e => {
					alert(e.response.data ?? e);
					setLoading("");
					setUID("");
				})
		}
		else alert("Enter valid details");
	}

	async function handle_cancel() {
		reset_data();
		setUID("");
	}

	async function handle_create() {
		if (validate_data()) {
			setLoading("Creating User...");
			const data = {
				Voter_ID: voterID,
				Name: name,
				DOB: moment(DOB).valueOf(),
				Contact_No: contactNo,
				Address: address,
				State: state,
				City: city,
				PIN: PIN,
				Password: password,
				Roles: roles.replace(" ", "").split(",").filter(val => val !== "")
			};

			axios({
				method: "POST",
				url: "/admin/user/create",
				data: data
			})
				.then(res => {
					alert(res.data);
					reset_data();
					setUID("");
				})
				.catch(e => {
					alert(e.response.data ?? e);
					setLoading("");
				})
		}
		else alert("Enter valid details");
	}

	async function handle_update() {
		if (validate_data()) {
			setLoading("Updating User...");
			const data = {
				_id: uID,
				Name: name,
				DOB: moment(DOB).valueOf(),
				Contact_No: contactNo,
				Address: address,
				State: state,
				City: city,
				PIN: PIN,
				Password: password,
				Roles: roles.replace(" ", "").split(",").filter(val => val !== "")
			};

			axios({
				method: "PUT",
				url: "/admin/user/update?voter_id=" + userID,
				data: data
			})
				.then(res => {
					alert(res.data);
					reset_data();
					setUID(res.data._id);
				})
				.catch(e => {
					alert(e.response.data ?? e);
					setLoading("");
				})
		}
		else alert("Enter valid details");
	}

	async function handle_delete() {
		setLoading("Deleting User...");
		axios({
			method: "DELETE",
			url: "/admin//user/delete?voter_id=" + userID,
		})
			.then(res => {
				alert(res.data);
				reset_data();
				setUID(res.data._id);
			})
			.catch(e => {
				alert(e.response.data ?? e);
				setLoading("");
			})
	}

	return (
		<div className='w-full h-full px-14 py-6 flex flex-col items-center gap-y-3 '>
			<form
				className='flex gap-x-4'
				onSubmit={handle_search}
			>
				<input
					className='inp w-96 focus:outline-none focus:border-transparent'
					type={'text'}
					name='Voter ID'
					placeholder='Search User here'
					value={userID}
					onChange={(e) => { setUserID(e.target.value) }}
				/>
				<button
					name='search'
					type='submit'
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
					data-ripple-light="true"
				>
					Search User
				</button>
			</form>
			<span>{loading}</span>
			<form
				className='px-10 py-12 bg-white rounded w-96 flex flex-col gap-y-3 items-center'
				onSubmit={(e) => { e.preventDefault() }}
			>
				<h1 className='text-3xl text-blue-600' >Manage User</h1>
				
				<input
					className='inp w-full '
					type='text'
					name='Voter ID'
					placeholder='Voter ID'
					value={voterID}
					onChange={(e) => { setVoterID(e.target.value) }}
					InputProps={{
						startAdornment: (
						  <InputAdornment position="start">
							<HowToVoteIcon color="secondary"/>
						  </InputAdornment>
						),
					}}
				/>
				{/* <label htmlFor="username" className='item-left'>Username</label> */}
				<input
					className='inp w-full'
					id='username'
					type='text'
					name='Name'
					placeholder='Name'
					value={name}
					onChange={(e) => { setName(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='e-mail'
					placeholder='E-mail ID'
					value={name}
					onChange={(e) => { setName(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='password'
					name='Password'
					placeholder='Password'
					value={password}
					onChange={(e) => { setPassword(e.target.value) }}
				/>
				<label className='w-full -mb-2 font-bold' htmlFor="DOB">Date Of Birth</label>
				<input
					className='inp w-full'
					type='date'
					name='DOB'
					placeholder='Date of Birth'
					value={DOB}
					onChange={(e) => { setDOB(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='Roles'
					placeholder='Roles'
					value={roles}
					onChange={(e) => { setRoles(e.target.value.trim()) }}
				/>
				<input
					className='inp w-full'
					type='number'
					name='Contact_No'
					placeholder='Contact No.'
					value={contactNo}
					onChange={(e) => { setContactNo(e.target.value) }}
				/>
				
				{
					flag ?
						<button
							name='create'
							type='submit'
							className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							data-ripple-light="true"
							onClick={handle_create}
						>
							Create User
						</button>
						: <>
							<button
								name='update'
								type='submit'
								className='btn-plain text-white bg-green-600'
								onClick={handle_update}
							>
								Update User
							</button>
							<button
								name='delete'
								type='submit'
								className='btn-plain text-white bg-red-600'
								onClick={handle_delete}
							>
								Delete User
							</button>
						</>
				}
				<button
					name='cancel'
					type='submit'
					className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 "
					onClick={handle_cancel}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default ManageUser