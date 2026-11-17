"use client";

import Link from 'next/link';
import CoffeeClubIcon from '@/public/img/thecoffeeclub.jpg';
import Coffee from '@/public/img/coffee.png';
import LoginCover from '@/public/img/bg.png';
import Logo from '@/public/img/Logo.png';
import { useState } from 'react';
import GoogleIcon from '@/public/google.png';
import CloudIcon from '@/public/img/cloud.png';
import SystemIcon from '@/public/img/system.png';
import AppIcon from '@/public/img/app.png';
import SupportIcon from '@/public/img/support.png';
import TrainIcon from '@/public/img/Train.png';

import { motion } from 'motion/react';

const Qutes = [
    {
        "id" : 1
    },
    {
        "id" : 2
    },
    {
        "id" : 3
    }
]

const LoginPage = () => {

    const [toggleActive, setToggleActive] = useState("Sign In");

    return (
        <div className='flex w-full h-screen justify-center items-center lg:p-3'>
            <motion.div 
            initial={{ opacity:0 , y: 100 }}
            animate={{ opacity: 1, y: 0 ,}}
            className='w-full bg-[#fff] h-full lg:h-140 lg:w-210 flex lg:rounded-3xl bg-cover bg-center overflow-hidden border border-[#000]/20 shadow-lg'>
                <div className='register-form w-full lg:w-[50%] overflow-y-auto'>
                    {
                        toggleActive === "Sign In" ? 
                        <form className='w-[100%] p-10'>
                            <header className='w-full h-25 flex flex-col justify-center items-center lg:items-start'>
                                <div className='flex items-center justify-start gap-1'>
                                    <img src={Logo.src} className='w-10'/>
                                    <h3 className='font-[Valley] text-[13px] lg:text-[18px]'>Gradient</h3>
                                </div>
                                <h3 className='text-[11px] lg:text-[15px] font-[Valley] mt-3 text-[#000]/80'>Welcome Back Creative!</h3>
                                <span className='text-[10px] lg:text-[11px] text-[#000]/60 font-[Valley]'>We Are Happy To See You Again</span>
                            </header>

                            <div className='w-full h-13'>
                                <div className='flex border border-[#000]/20 w-full flex justify-center items-center mt-3 rounded-3xl p-1'>
                                    <span onClick={() => setToggleActive("Sign In")} className={`w-[50%] h-full rounded-3xl font-[Valley] text-[13px] p-1 text-[#000] flex justify-center cursor-pointer hover:bg-[#000]/20 hover:text-[#fff] transition duration-200 ${toggleActive === "Sign In" ? "bg-blue-400  text-[#fff]" : "" }`}>Sign In</span>
                                    <span onClick={() => setToggleActive("Sign Up")} className={`w-[50%] h-full rounded-3xl font-[Valley] text-[13px] p-1 text-[#000] flex justify-center cursor-pointer hover:bg-[#000]/20 hover:text-[#fff] transition duration-200 ${toggleActive === "Sign Up" ? "bg-blue-400  text-[#fff]" : "" }`}>Sign Up</span>
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-2 font-[Valley]'>
                                <input type="text" placeholder='name@example.com' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='Enter your password' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                            </div>

                            <div className='w-full flex justify-end pr-1 font-[Valley] text-[12px] text-blue-600 mt-2'>
                                <span className='cursor-pointer hover:text-blue-200 transition duration-200'>Forgot Password?</span>
                            </div>

                            <button className='w-full bg-blue-400 text-[#fff] h-10 rounded-3xl font-[Valley] text-[13px] mt-7 cursor-pointer'>Login</button>

                            <div className='flex justify-center items-center h-10 gap-2 mt-3'>
                                <div className='w-[50%] h-0.5 bg-[#000]/20 rounded-3xl'></div>
                                <span className='text-[13px] font-[Valley] text-[#000]/60'>OR</span>
                                <div className='w-[50%] h-0.5 bg-[#000]/20 rounded-3xl'></div>
                            </div>

                            <button className='w-full text-[#000] border border-[#000]/20 h-10 rounded-3xl font-[Valley] text-[13px] mt-3 text-[#000]/60 flex justify-center items-center gap-3 cursor-pointer'><img src={GoogleIcon.src} className='w-4 h-4'/>Log in with Google </button>
                        </form> 
                        :
                        <form className='w-full w-[100%] p-10'>
                            <header className='w-full h-25 flex flex-col justify-center items-center lg:items-start'>
                                <div className='flex items-center justify-start gap-1'>
                                    <img src={Logo.src} className='w-10'/>
                                    <h3 className='font-[Valley] text-[13px] lg:text-[18px]'>Gradient</h3>
                                </div>
                                <h3 className='text-[11px] lg:text-[15px] font-[Valley] mt-3 text-[#000]/80'>Welcome to Gradient Home</h3>
                                <span className='text-[10px] lg:text-[11px] text-[#000]/60 font-[Valley]'>Create account and start manage to your project.</span>
                            </header>

                            <div className='w-full h-13'>
                                <div className='flex border border-[#000]/20 w-full flex justify-center items-center mt-3 rounded-3xl p-1'>
                                    <span onClick={() => setToggleActive("Sign In")} className={`w-[50%] h-full rounded-3xl font-[Valley] text-[13px] p-1 text-[#000] flex justify-center cursor-pointer hover:bg-[#000]/20 hover:text-[#fff] transition duration-200 ${toggleActive === "Sign In" ? "bg-blue-400  text-[#fff]" : "" }`}>Sign In</span>
                                    <span onClick={() => setToggleActive("Sign Up")} className={`w-[50%] h-full rounded-3xl font-[Valley] text-[13px] p-1 text-[#000] flex justify-center cursor-pointer hover:bg-[#000]/20 hover:text-[#fff] transition duration-200 ${toggleActive === "Sign Up" ? "bg-blue-400  text-[#fff]" : "" }`}>Sign Up</span>
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-2 font-[Valley]'>
                                <input type="text" placeholder='Full-name' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='name@example.com' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='Phone' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='Enter password' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='Birthday' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='e.g. Yangon, Myanmar' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>

                                <div className='flex items-center justify-between mt-5'>
                                    <h3 className='text-[13px]'>Invite</h3>
                                    <span className='text-[13px] text-[#000]/60'>Get from ( friend | admin )</span>
                                </div>
                                <input type="text" placeholder='Student Code' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                                <input type="text" placeholder='Community Code' className='w-full border border-[#000]/20 h-11 rounded-3xl pl-3 text-[12px]'/>
                            </div>

                            <div className='w-full flex justify-end pr-1 font-[Valley] text-[12px] text-blue-600 mt-2'>
                                <span className='cursor-pointer hover:text-blue-200 transition duration-200'>Already have an account?</span>
                            </div>

                            <button className='w-full bg-blue-400 text-[#fff] h-10 rounded-3xl font-[Valley] text-[13px] mt-7 cursor-pointer'>Create Account</button>
                        </form> 
                    }
                </div>

                <div className='hidden lg:flex w-[50%] bg-blue-400 rounded-l-[100px] flex flex-col justify-center gap-3'>
                    <div className='flex justify-center ml-10 items-center h-20 list-none p-10'>
                        <div className='flex flex-col items-center gap-1'>
                            <li className='border border-[#fff]/20 w-15 h-15 rounded-md backdrop-blur-xl bg-[#fff]/20 flex justify-center items-center'><img src={SystemIcon.src} className='w-6 h-6'/></li>
                            <span className='font-[Valley] text-[12px] text-[#fff]'>System</span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center h-20 list-none p-10 gap-13'>
                        <div className='flex flex-col items-center gap-1'>
                            <li className='border border-[#fff]/20 w-15 h-15 rounded-md backdrop-blur-xl bg-[#fff]/20 flex justify-center items-center'><img src={TrainIcon.src} className='w-6 h-6'/></li>
                            <span className='font-[Valley] text-[12px] text-[#fff]'>Training</span>
                        </div>
                        <li style={{backgroundImage: `url(${Logo.src})`}} className='w-17 h-17 rounded-md backdrop-blur-xl mt-10 bg-cover bg-center'></li>
                        <div className='flex flex-col items-center gap-1'>
                            <li className='border border-[#fff]/20 w-15 h-15 rounded-md backdrop-blur-xl bg-[#fff]/20 flex justify-center items-center'><img src={AppIcon.src} className='w-6 h-6'/></li>
                            <span className='font-[Valley] text-[12px] text-[#fff]'>App</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center h-20 list-none p-10 pl-20 mt-10 pl-30 pr-30'>
                        <div className='flex flex-col items-center gap-1'>
                            <li className='border border-[#fff]/20 w-15 h-15 rounded-md backdrop-blur-xl bg-[#fff]/20 flex justify-center items-center'><img src={SupportIcon.src} className='w-6 h-6'/></li>
                            <span className='font-[Valley] text-[12px] text-[#fff]'>Support</span>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <li className='border border-[#fff]/20 w-15 h-15 rounded-md backdrop-blur-xl bg-[#fff]/20 flex justify-center items-center'><img src={CloudIcon.src} className='w-6 h-6'/></li>
                            <span className='font-[Valley] text-[12px] text-[#fff]'>Cloud</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginPage