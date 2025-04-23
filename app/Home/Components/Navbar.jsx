'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faHome, faMagnifyingGlass, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const Navbar = () => {
   const { register, handleSubmit,reset, formState: { errors,isLoading,isSubmitting } } = useForm();
      const [currentYear, setCurrentYear] = useState("");
  

  const [isDrop, setisDrop] = useState(false)

    const { data: session } = useSession()
    
    const redirect= useRouter()
    
    const [creator, setcreator] = useState("")

    const changehandle =(e) => {
      setcreator(e.target.value);
   }




    const onSearch =() => {

            redirect.push(`/${creator}`);
      setcreator("")

    }
    

  

  return (
   
      
<nav>
 
 <div className='flex flex-row justify-end text-gray-500 text-2xl	h-100px bg-white py-4 gap-10'>

 <Link className='absolute mr-325' href="/Home">  <Image height={200} width={180} className=''   src="/fanfuel.png"  alt="Fans showing appreciation" />

 </Link>

 <Link className='text-blue-600 font-medium' href="/Home"> Home </Link>
 <Link className='text-blue-600 font-medium' href="/about"> Contact Us </Link>
 <Link className='text-blue-600 font-medium' href="/Home"> About </Link>

 { /* <Link className='hover:text-blue-400 pl-10'href="/Home">Account</Link> */ }

 {/* {session ? (<span className='text-sm'>Signed in as {session.user.email} </span>):"" } */}

<div className='flex flex-row border w-60 border-gray-400 rounded-full '>
 <input value={creator} onChange={changehandle} onKeyDown={(e) => {
if(e.key==="Enter")  {
onSearch()
 }
 } } placeholder='Search creators' type="text" className='focus:ring-5 focus:ring-none focus:ring-blue-800 active:border-0 pl-3 pr-5  w-50 h-10' />
 
 <button onKeyDown={(e) => {
if(e.key==="Enter")  {
onSearch()
 }
 } } ><FontAwesomeIcon size='5em' className= 'text-2xl 'icon={faMagnifyingGlass}/></button>
 </div>

 {!session && (<Link href="/Login"> <button onClick={() => {

 }
 } className="text-white mr-10 bg-gradient-to-r from-indigo-800 to-blue-400 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"> Sign In</button></Link>)}

 {session && ( <button onClick={() => {
   signOut()
 }
 } className="text-white bg-gradient-to-r from-indigo-800 to-blue-400 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"> Sign Out</button>)}

 {session && <button onClick={()=>{setisDrop(!isDrop)}} onBlur={()=>{
  setTimeout(() => {setisDrop(false)
    
  }, 500);
 }} className="text-white bg-gradient-to-r from-indigo-800 to-blue-400 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-blue-800" type="button">Account <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />

</svg>
</button>
}
{isDrop && (
<div className=" absolute my-10 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <Link href="/Login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
      </li>
      <li>
        <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="/Editprofile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Profile</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
)
}

</div>


</nav>

  
  )
}

export default Navbar
