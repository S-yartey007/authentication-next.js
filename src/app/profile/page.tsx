'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

function ProfilePage() {
  const router = useRouter();
  const onLogout = async() => {
    try {
      await axios.get('/api/users/logout')
      console.log("Logout successfull")
      router.push('/login')

    } catch(error: any) {
      console.log(error.message)
    }
  }
  return (
    <div className='flex justify-center items-center flex-col gap-2'>
        <h1>Profile</h1>
        <hr/>
        <button onClick={onLogout}>Logout</button>
        <p>Profile page</p>
    </div>
  )
}

export default ProfilePage