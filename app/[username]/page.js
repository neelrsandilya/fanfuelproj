'use client'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faMoneyBill, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import Paymentform from '../Home/Components/Paymentform'
import PaymentPage from '../Home/Components/PaymentPage'
import { useParams } from 'next/navigation'


const page = ({params}) => {

    
    
   const [paymentform, setpaymentform] = useState({}) 



  const [user, setUser] = useState([]);

  const [toggle, settoggle] = useState(false);



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

  const [resolvedParams, setResolvedParams] = useState(null);


useEffect(() => {
  Promise.resolve(params).then((resolvedParams) => {
      setResolvedParams(resolvedParams);
      if (resolvedParams?.username) {
          fetchUser(resolvedParams.username);
      }
  });
}, [params]); 




return ( <>
    <div className='flex flex-col justify-center items-center'>
      

<img className='w-screen h-80'  src={user?.cover} alt="" />

<img className= ' mb-180 absolute  h-50 w-50  rounded-full border-b-cyan-500 border-10' src={user?.pp} alt="" />

<div className='flex flex-col justify-center items-center mt-30 text-md text-black'>
<span className='text-2xl text-black font-bold'>@{user?.username}  </span>

{user?.description}<br />

<span className='text-sm text-gray-700'>• 91,046 members • 171 posts    </span> <span className='text-sm text-gray-700'> $384,456/month   </span><br />
<span className=' text-sm text-gray-700'> Since {user?.year} </span>
<hr className=' w-screen blue' width="100%" size="10"/>
</div>

<span className='flex flex-row justify-between gap-10 text-2xl text-gray-700 '>
<button className="focus:text-blue-500 focus:font-bold ease-in duration-100	" onClick={()=>{settoggle(false)}}>Home</button>
<button className="focus:text-blue-500 focus:font-bold ease-in	duration-100" onClick={()=>{settoggle(true)}} >About</button>
</span>
{/* <hr className='mt-100 absolute w-screen blue' width="100%" size="10"/> */}

{!toggle && <div className=' w-screen min-h-200'>
    
<Paymentform user={user} setuser={setUser} />

</div>   
    }

{toggle && <div className=' w-screen min-h-200'>

<div className='bg-white rounded-2xl h-100 w-300 flex flex-col justify-center ml-20'>
<h2 className=' text-blue-600 font-bold text-2xl ml-30'>About</h2>

<p className='text-black text-md p-30 pt-10 leading-loose	'>

{user?.about}

</p>
</div>
</div>   
    }

    </div>
    </> )
}
export default page
