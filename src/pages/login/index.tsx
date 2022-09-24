/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/auth.context';


export default function Login() {
    const { login } = useContext(authContext)

    const onSubmit = (e: any) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg p-10 rounded w-4/12">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg text-center font-medium leading-6 text-gray-900">
                        SMILE JOKES - SIGN IN
                    </h3>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="mt-10">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <p className="text-sm mt-2 text-gray-600">Don´t have account? <Link className='text-blue-600' to='/register'>Sign up</Link></p>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
