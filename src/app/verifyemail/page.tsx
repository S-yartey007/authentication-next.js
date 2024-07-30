'use client';

import axios from "axios";
import Link from "next/link";
import React,{useEffect,useState} from "react";
import { useFormState } from "react-dom";

export default function VerifyEmailPage() {

    const [token,setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error,setError] = useState(false);

    const verifyUserEmail = async() => {
        try {
            await axios.post('/api/users/verifyemail',{token})
            setVerified(true)
            console.log(verified)

            
        } catch (error:any) {
            setError(true);
            console.log("Error occured")
        }
    }
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");


    },[])

    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    return (
        <div>
            <h1>Verify Email</h1>
            <h2>{token ? `${token}` : "no token"}</h2>
            {
                verified && (
                    <div>
                        <h2>Email Verified</h2>
                        <Link href='/login'>
                            Login
                        </Link>
                    </div>
                )
            }
              {
                error && (
                    <div>
                        <h2>Error</h2>
                       
                    </div>
                )
            }
        </div>
    )
    
}