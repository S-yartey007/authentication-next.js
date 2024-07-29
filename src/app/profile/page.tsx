'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'
import Link from 'next/link';
function ProfilePage() {
  const router = useRouter();
  const [data,setData] = useState("nothing")
  const onLogout = async() => {
    try {
      await axios.get('/api/users/logout')
      console.log("Logout successfull")
      router.push('/login')

    } catch(error: any) {
      console.log(error.message)
    }
  }

  const getUserDetails = async() => {
    const res = await axios.get('/api/users/details')
    console.log(res)
    setData(res.data.data._id);
    console.log(data)
  }

  return (
    <div className='flex justify-center items-center flex-col gap-2'>
        <h1>Profile</h1>
        <hr/>
        <h2>{data === "nothing" ? "nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
        <button onClick={onLogout}>Logout</button>
        <button onClick={getUserDetails}>GetDetails</button>
        <p>Profile page</p>
    </div>
  )
}

export default ProfilePage