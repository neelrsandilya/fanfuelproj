'use client'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faMoneyBill, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { initiate } from '@/actions/useractions';
import { useEffect } from 'react';





const Paymentform = ({user,setUser}) => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
          console.log("Razorpay script loaded ✅");
        };
        script.onerror = () => {
          console.error("Razorpay script failed to load ❌");
        };
        document.body.appendChild(script);
      
        // Optional cleanup
        return () => {
          document.body.removeChild(script);
        };
      }, []);

const [paymentform, setpaymentform] = useState({})

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
const onSubmit = (data) => {console.log(data);

  setpaymentform({name:data.name,
     amount: data.amount,message:data.message ,})
    console.log(Number(data.amount))
     Pay(Number(data.amount))
     console.log(typeof(Number(data.amount)))
    
    }



const Pay = async(amount)=>{

    let o = await initiate(amount,user?.username,paymentform);
    let orderID =o.id;
    var options = {

      "key":process.env.NEXT_PUBLIC_RZP_KEY_ID,
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Fanfuel",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id":orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url":`localhost:3000/api/razorpay`,
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
 
      
      const rzp = new window.Razorpay(options);
      rzp.open();
}


   
        





  return (
    <form className='flex flex-row ' onSubmit={handleSubmit(onSubmit)}>
        <div className="inrbox bg-white text-black flex flex-col ml-20  w-200   items-center py-10 px-5 rounded-xl ">
<h2 className=' text-indigo-600 font-bold text-2xl'  >Donate </h2>
<div>
    <label htmlFor="name">Name:</label> <br />
    <input  name="name" {...register("name",{required:true, minLength:{value:3,message:"name should be longer!"},maxLength:15})} placeholder='Enter Your Name'  className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.name && <div className='text-red-500 text-sm'>{errors.name.message} </div>}
</div>
<div>
    <label htmlFor="message">Message:</label> <br />
    <textarea {...register("message")} name="message" placeholder='Enter your message' type="text-area" className='border pl-3 border-gray-400 rounded-md w-80 h-10 py-10' />

</div>
<div>
    <label htmlFor="amount" className='text-sm'>Amount:</label> <br />
    <input name= 'amount' {...register("amount",{required:true,message:"amount should be at least 3$ "}) }placeholder='Enter Your amount' type="text " className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
    {errors.amount && <div className='text-red-500 text-sm'>{errors.amount.message} </div>}

    </div>
    <button disabled={isSubmitting}  type='submit' className='bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 flex justify-center w-80 text-white '> Pay</button>

{/* <input  type='submit' className='bg-blue-400 rounded-full p-2 flex justify-center w-80 text-white '/> */}

<p className='text-sm text-gray-400 pt-5'>By paying, you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.</p>

<div className='flex flex-row justify-between gap-10 items-center w-60'>
<button onClick={()=>{Pay(9)}} className='bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 flex justify-center w-20 text-white '> $9.99</button>
<button onClick={()=>{Pay(99)}} className='bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 flex justify-center w-20 text-white '> $99</button>
<button onClick={Pay} className='bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 flex justify-center w-20 text-white '> $979</button>
</div>

</div>

<div className=" bg-white text-black flex flex-col ml-30  w-100   items-center py-10 px-5 rounded-xl ">

<h1 className='text-indigo-700 font-bold'>Recent Donations...</h1>
<ul className='flex flex-col gap-5 mt-10'>
    <li className='flex gap-4 justify-baseline items-baseline'><FontAwesomeIcon size='10em' className= 'ml-5 text-md'icon={faUser}/>Joe Goldberg donated 63$</li>
    <li className='flex gap-4 justify-baseline items-baseline'><FontAwesomeIcon size='10em' className= 'ml-5 text-md'icon={faUser}/> Ryan donated 565$</li>
    <li className='flex gap-4 justify-baseline items-baseline'><FontAwesomeIcon size='10em' className= 'ml-5 text-md'icon={faUser}/>Homelander donated 79$</li>
    <li className='flex gap-4 justify-baseline items-baseline'><FontAwesomeIcon size='10em' className= 'ml-5 text-md'icon={faUser}/> Dexter donated 3446$</li>
 
</ul>

</div>


</form>



  )
}

export default Paymentform
