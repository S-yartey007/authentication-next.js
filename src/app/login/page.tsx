'use client';

import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/navigation';
import {axios} from "axios";

export default function Login() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const Login = async() => {

    }
    return (
        <div className='p-2 flex flex-col items-center justify-center min-h-screen py-2 gap-2'>
            <h1>SignUp</h1>
            <hr/>
          
            <label htmlFor='email'>email</label>
            <input className='p-2 rounded '
            id='email'
            type='text'
            value={user.email}
            onChange={(e) => {
                setUser({...user,email: e.target.value})
            }}
            placeholder='emailpassword'
            />
            <label htmlFor='password'>password</label>
            <input className='p-2 rounded'
            id='password'
            type='password'
            value={user.password}
            onChange={(e) => {
                setUser({...user,password: e.target.value})
            }}
            placeholder='password'
            />
            <button className='p-2 border border-gray-300 rounded'>
                Login
            </button>
            <Link href="/signup">Go to Signup page</Link>
            
        </div>
    )
}