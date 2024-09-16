import React, { useContext, useState } from 'react'
import { login } from '../../../services/auth.service';
import { AuthContext } from '../../../aplication/contexts/AuthContext';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const { loginApp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            if (email != "" && password != "" && !!email && !!password) {
                //consumir el servicio
                const response = await login(email, password);
                if(response?.token){
                    const token = decodeToken(response?.token);
                    console.log(token);
                    loginApp(response.token, token.sub);
                    navigate("/dashboard")
                }
            } else {
                setError("Email and password cannot be empty")
            }
        } catch (e) {
            setError(e.message);
        } finally {
            if (error != null) {
                setTimeout(() => {
                    setError(null);
                }, 3000)
            }
            setIsLoading(false);
        }

    }
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <h1 className='text-5xl font-semibold'>TaskManager</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your email" />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='text-lg font-medium'>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your email"
                                type={"password"}
                            />
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                onClick={handleLogin}
                                disabled={isLoading}
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Don't have an account?</p>
                            <button
                                //onClick={() => setAuthState('register')}
                                className='ml-2 font-medium text-base text-violet-500'>Sign up</button>
                        </div>
                        {error && (<div className='p-3 mt-2 bg-red-500 border rounded-md text-white font-normal text-md'>
                            {error}
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
        </div>
    )
}
