'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/navigation"; 

import { useSession, signIn, signOut } from "next-auth/react"
const Formx = () => {

    const { register, handleSubmit,reset, formState: { errors,isLoading,isSubmitting } } = useForm();
    const [currentYear, setCurrentYear] = useState("");


 const [message, setmessage] = useState("")

 useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
}, []);

const redirect=useRouter()

 const onSubmit = async(data) => {

    console.log(data);
    reset();
    setmessage("");
 
    
    try{

        const response = await fetch(`/api/Register/${data.username}`,{method:"PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) })

            redirect.push(`/${data.username}`);
                        if(response.ok){
                console.log("Account updated succesfully")

                setmessage("Account updated succesfully")}
                else{
                    setmessage("Error 500")
                }            
    }
  


   catch(error){
setmessage("Error: 400")

   }

 }
 
 const { data: session } = useSession()
     
   const [user, setUser] = useState([]);
  
  
   const [logUser, setlogUser] = useState("")
 
 
   useEffect(() => {
   
     if(session?.user?.name)
 
       {
         setlogUser(session.user.name)
         fetchUser(session.user.name)
       }
   }, [session])

   useEffect(() => {
    
    if(user){

reset(
    {


        username: user.username || "",
        email:user.email || "",
        cover: user.cover || "",
        about: user.about || "",
        description: user.description || "",
        pp: user.pp || "",
        password: user.password || "",


    }
)

    }
   }, [user,reset])
   
   
 
 
  
  
    const fetchUser = async (username) => {
        try {
            const response = await fetch(`/api/Register/${encodeURIComponent(username)}`);
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }
            const userInfo = await response.json();
            console.log(userInfo)
            setUser(userInfo.user);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
  
  




  return (
    <div >


<form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
    <div className="outrbox bg-indigo-500 flex flex-col justify-center w-100 min-h-100 mt-10 rounded-xl items-center">
        <div className="inrbox bg-white text-black flex flex-col justify-center w-100 min-h-100 items-center py-10 px-5 rounded-xl ">
<h2 className='text-xl text-black'>Update Your Profile </h2>
<div>
    <label htmlFor="username">Userame:</label> <br />
    <input disabled {...register("username",{required:true, minLength:{value:3,message:"Username should be longer!"},maxLength:15})} placeholder='Enter Your Name' type="text" className='disabled border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.username && <div className='text-red-500 text-sm'>{errors.username.message} </div>}
</div>

<div>
    <label htmlFor="email">Email:</label> <br />
    <input {...register("email",{ minLength:{value:5,message:"email should be atleast 5 letters"},maxLength:25, pattern:{value: /\S+@+\S+.\S/,message:"Please enter a valid email address"}})}placeholder='Enter Your email' type="email" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />

</div>
<div>
    <label htmlFor="password" className='text-sm'>Password:</label> <br />
    <input {...register("password",{required:true, minLength:{value:8,message:"password should be at least 8 letters"},maxLength:20})}placeholder='Enter Your password' type="password" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
    {errors.password && <div className='text-red-500 text-sm'>{errors.password.message} </div>}

    <div>
    <label htmlFor="cover">Cover:</label> <br />
    <input {...register("cover",{ minLength:{value:3,message:"cover should be longer!"}})} placeholder='Your cover pic URL' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.cover && <div className='text-red-500 text-sm'>{errors.cover.message} </div>}
</div>

<div>
    <label htmlFor="pp">Profile:</label> <br />
    <input {...register("pp",{required:true, minLength:{value:3,message:"pp should be longer!"}})} placeholder='Your profile pic URL' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.pp && <div className='text-red-500 text-sm'>{errors.pp.message} </div>}
</div>

<div>
    <label htmlFor="description">Description:</label> <br />
    <input {...register("description",{required:true, minLength:{value:3,message:"description should be longer!"}})} placeholder='Enter your Description' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.description && <div className='text-red-500 text-sm'>{errors.description.message} </div>}
</div>

<div>
    <label htmlFor="about">About:</label> <br />
    <input {...register("about",{required:true, minLength:{value:3,message:"about should be longer!"}})} placeholder='Enter your about' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.about && <div className='text-red-500 text-sm'>{errors.about.message} </div>}
</div>

{currentYear && (
                            <div className='hidden'>
                                <input 
                                    {...register("year")}
                                    type="text" 
                                    value={currentYear} 
                                    readOnly 
                                    className='border pl-3 border-gray-400 rounded-md w-80 h-10'
                                />
                            </div>
                        )}


</div>

<input disabled={isSubmitting} type='submit' className='bg-gradient-to-r from-indigo-800 to-blue-400 rounded-full p-2 flex justify-center w-80 mt-5 text-white active:bg-blue-950 '/>

<p className='text-sm text-gray-400 pt-5'>By logging in and using , you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.</p>


</div>
</div>
</form>




      
    </div>
  )
}

export default Formx
