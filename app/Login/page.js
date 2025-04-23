'use client'
import React, { useState } from 'react'
import Formx from '../Home/Components/Form'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { getProviders } from 'next-auth/react'
import { get } from 'react-hook-form'
import { useEffect } from 'react'


const Login = () => {

  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  const [providers, setproviders] = useState(null)



 const fetchProvider= async()=>{
    const res =  await getProviders();
 setproviders(res)

    }


  useEffect(() => {

  fetchProvider()

  }, [])
  


  return (
    <div className='flex flex-col justify-center items-center' >
      
<Formx/>

<h1 className='text-gray-500'>OR</h1>


<br/>

<div className="flex flex-col items-center justify-center h-20 gap-4">

      {providers &&
        Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            type="button"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="bg-gradient-to-r from-indigo-800 to-blue-400 rounded-full p-2 flex justify-center w-80  text-white active:bg-blue-950"
          >
            Sign in with {provider.name}
          </button>
        ))}
    </div>
  </div>
  )}



export default Login
