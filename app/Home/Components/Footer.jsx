import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faHome, faMagnifyingGlass, faMoneyBill, faStar,faX,fainstagram } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div>

<footer className='py-20px flex flex-col bg-white h-100'>

<Link className='absolute ml-10 mt-20' href="/Home">  <Image height={200} width={180} className=''   src="/fanfuel.png"  alt="Fans showing appreciation" />

</Link>

<div className='absolute mt-50 ml-10 flex flex-row gap-5'>
<SocialIcon url="https://twitter.com/jaketrent" />
<SocialIcon url="https://facebook.com/jaketrent" />
<SocialIcon url="https://linkedin.com/in/jaketrent" />
</div>

<div className='grid grid-cols-2 grid-rows-4  text-gray-500 text-md bg-white py-6 gap-8 pl-170 pt-30 pb-30'>


<Link className='hover:text-indigo-600'href="/Home">Home</Link>
<Link className='hover:text-indigo-600'href="/Home">Dashboard</Link>
<Link className='hover:text-indigo-600'href="/Home">Account</Link>
<Link className='hover:text-indigo-600'href="/Home">Contact</Link>
<Link className='hover:text-indigo-600'href="/Home">Help</Link>
<Link className='hover:text-indigo-600' href="/about">About</Link>
<Link className='hover:text-indigo-600'href="/Home">Terms of Service</Link>
<Link className='hover:text-indigo-600' href="/Home">Privacy</Link>

</div>

<div className='text-xs bg-gradient-to-r from-indigo-800 to-blue-400 py-4 flex flex-row justify-center  '>Copyright © 2025 . All Rights Reserved.</div>

</footer>

      
    </div>
  )
}

export default Footer
