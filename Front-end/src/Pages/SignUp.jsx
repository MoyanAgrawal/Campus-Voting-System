import React from 'react';
import { Lock } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
const SignUp = () => {
  return (
  <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-black py-10 px-10">
          <div className='w-full h-full'>
          <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
          alt="Placeholder Image"
          className="object-cover w-full h-full rounded-3xl "
        />
          </div>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">SIGN UP</h1>
              <p>Enter your information to SignUp</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                  <PersonIcon /> First name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                  <PersonIcon /> Last name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    <EmailIcon /> Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="xyz@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                  <Lock /> Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                  <Lock /> Confirm Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;