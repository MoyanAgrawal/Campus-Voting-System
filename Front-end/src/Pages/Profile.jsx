import { Close } from '@mui/icons-material';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

function Profile() {
	const [data, setData] = useState(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		axios("/user/profile")
			.then(res => {
				const { _id, ...d } = res.data;
				setData(d);
			})
			.catch(e => {
				setData(null);
			})
	}, []);

	return (
		<div className='w-full h-full grid place-content-center place-items-center gap-5' >
			{
				open &&
				<ResetPassword
					setClose={() => setOpen(false)}
				/>
			}
			{
				(data == null)
					? <span class="text-">Loading...</span>
					: <table>
						<tbody>
							{
								Object.keys(data).map((key, index) =>

									(key !== "Roles" && key !== "DOB") ?
										<tr key={index}>
											<td className='label'>{key}: </td>
											<td className='value'>{data[key]}</td>
										</tr> :
										(key === "DOB" ?
											<tr key={index}>
												<td className='label'>{key}: </td>
												<td className='value'>{moment(data[key]).format("DD/MM/YYYY hh:mm a")}</td>
											</tr> :
											<tr key={index}>
												<td className='label'>{key}: </td>
												<td className='value'>
													{
														data[key].map((v, i) =>
															<span key={i} className='px-3 py-1 mr-4 rounded-sm bg-blue-500 text-white'>{v}</span>
														)
													}
												</td>
											</tr>
										)
								)
							}
						</tbody>
					</table>
			}
			<button
				className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 "
				onClick={() => setOpen(!open)}
			>
				Reset Password
			</button>
		</div >
	)
}

function ResetPassword({ setClose }) {
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	async function handle_password_reset(e) {
		e.preventDefault();

		if (cPassword.trim() && password.trim() && password === cPassword) {
			axios({
				method: 'put',
				url: '/user/reset-password',
				data: {
					password: password
				}
			})
				.then(res => {
					alert("Password changed successfully");
					setClose();
				})
				.catch(e => {
					alert("Password not changed");
				})
		}
		else alert("Enter valid details");
	}
	return (
		<div className='absolute w-full h-screen bg-black top-0 bg-opacity-90 grid place-items-center'>
			<button
				className='absolute top-0 right-0 text-white p-4'
				onClick={() => setClose()}
			>
				<Close fontSize='medium' />
			</button>
			<form
				className='px-10 py-12 bg-white rounded w-80 flex flex-col gap-y-5 items-center'
				onSubmit={handle_password_reset}
			>
				<h1 className='text-3xl text-blue-600' >Reset Password</h1>
				<input
					className='inp'
					type={'password'}
					name='password'
					placeholder='Enter new Password'
					value={password}
					onChange={(e) => { setPassword(e.target.value) }}
				/>
				<input
					className='inp'
					type={'password'}
					name='cpassword'
					placeholder='Confirm new Password'
					value={cPassword}
					onChange={(e) => { setCPassword(e.target.value) }}
				/>
				<button
					name='submit'
					type='submit'
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Reset Password
				</button>
			</form>
		</div >
	)
}

export default Profile