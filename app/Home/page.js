'use client'
import Formx from './Components/Form'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons'
import Spline from '@splinetool/react-spline'
import TestimonialSlider from './Components/Testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'

const Home = ({}) => {
  return ( 
  <>
    <div>
 <main className='flex flex-col gap-10'>
    <div  className='flex flex-row'>

<motion.div initial={{opacity:0, y:50}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} className="logo h-180 w-full bg-gradient-to-r from-indigo-800 to-blue-400" >

  <motion.h1  initial={{opacity:0, y:50}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} className='m-30 text-7xl font-bold font-sans leading-30 '>
    
   <div className='absolute'> Empower <span className='text-indigo-900'>Creators</span > <br /> Reward<span className='text-indigo-900'> Supporters</span> <br />Build<span className='text-indigo-900'> Communities</span></div>
  

  <Spline scene="https://prod.spline.design/cleBiEtkLdL71smc/scene.splinecode" />
  <div className='absolute  flex flex-row justify-center items-center w-screen mb-200 '>
  {/* <Link className='absolute mb-140' href="/Login"><button className='  bg-gradient-to-r from-blue-800 to-indigo-900  text-white  font-medium rounded-full text-lg px-15 py-5 text-center tracking-widest hover:bg-green-300 '>GET STARTED</button></Link> */}
  
  <Link className='absolute mb-140' href="/Login" ><button className='bg-gradient-to-r from-indigo-800 to-blue-800 hover:from-green-indigo-300 hover:to-blue-600 text-white text-lg px-15 py-5 text-center rounded-full font-medium transition-all duration-1000 ' >GET STARTED</button></Link>
 </div>

  </motion.h1>

</motion.div>

<div className='flex flex-row justify-center items-center bg-white'>
{/* <Formx/> */}
</div>
    </div>



<motion.div initial={{opacity:0, y:80}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} className='  bg-gradient-to-r from-indigo-800 to-blue-400 min-h-screen w-full h-120 flex justify-center items-center px-10 py-15'>
  <div className=' w-full '>
<h3  className=' mb-10 font-bold text-4xl hover:scale-105 transition duration-2000 ease-in-out'>"Monetize Your Creativity,  One Supporter at a Time." </h3>
<p className='text-xl leading-normal'> Join a platform where creators thrive, and fans get exclusive access to the content they love. Whether you're an artist, writer, podcaster, or filmmaker—turn your passion into sustainable income.</p>
</div>

<img 
                  className=" shadow-lg h-4/5 mr-10 ml-20 object-cover  overflow-hidden rounded-4xl hover:scale-105 transition duration-1000 ease-in-out "
                
                  src="/fans.jpg" 
                  alt="Fans showing appreciation"
                />

    </motion.div>

<motion.div initial={{opacity:0, y:80}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }} className='bg-gradient-to-r from-indigo-800 to-blue-400 w-full min-h-screen flex flex-col justify-center items-center'>
<h1  className='text-6xl'>WHY CHOOSE US? </h1>

<div className='flex flex-row justify-around items-center m-10 gap-20' >

<div className='flex flex-col justify-center items-center gap-5'> 

<FontAwesomeIcon size='10em' className= 'text-4xl'icon={faMoneyBill}/>

  <h3 className='text-gray-800 text-3xl font-bold'>Direct Support</h3>
  <p className='text-center text-lg' > Your audience can subscribe and <br /> support your work effortlessly.</p>
</div>
<div className='flex flex-col justify-center items-center gap-5'> 

<FontAwesomeIcon size='10em' className= 'text-4xl'icon={faStar}/>

  <h3 className='text-gray-800 text-3xl font-bold'>Exclusive Content</h3>
  <p className='text-center text-lg' > Offer premium content, behind-the-scenes <br /> access, and early releases.</p>
</div>
<div className='flex flex-col justify-center items-center gap-5'> 

<FontAwesomeIcon size='10em' className= 'text-4xl'icon={faHeart}/>

  <h3 className='text-gray-800 text-3xl font-bold'> Community Engagement</h3>
  <p className='text-center text-lg' > Build deeper connections , <br />with your biggest fans</p>
</div>

</div>

    </motion.div>



<motion.div initial={{opacity:0, y:80}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }}  className='bg-gradient-to-r from-indigo-800 to-blue-400 w-full min-h-screen flex flex-row justify-center items-center t '>

<img className=' shadow-lg h-4/5 mr-20 object-cover  overflow-hidden rounded-4xl hover:scale-105 transition duration-1000 ease-in-out'   src="/influencer.jpg"  alt="Fans showing appreciation" />

<div><h1 className='text-6xl font-bold mb-10' >HOW IT WORKS</h1>

<ol className='flex flex-col gap-5 text-2xl list-decimal '>
  <li className='hover:scale-105 transition duration-2000 ease-in-out'><span className='font-bold text-indigo-950 '>Create Your Page: </span> Set up your membership tiers and rewards</li>
  <li className='hover:scale-105 transition duration-2000 ease-in-out'><span className='font-bold text-indigo-950 '>Share With Fans: </span> Invite your audience to subscribe</li>
  <li className='hover:scale-105 transition duration-2000 ease-in-out'><span className='font-bold text-indigo-950 '>Earn & Engage: </span>Get paid while building an engaged community</li>

</ol>

<Link href="/Login"><button className=' absolute mt-10 bg-gradient-to-r from-blue-800 to-indigo-950 hover:bg-blue-400z text-white  font-medium rounded-full text-lg px-15 py-5 text-center tracking-widest   '>SIGN UP NOW</button></Link>

</div>


</motion.div>
<h2 className="text-5xl font-bold text-center mb-6 text-indigo-500">Meet Our Creators</h2>

<motion.div initial={{opacity:0, y:80}}  whileInView={{opacity:1,y:0}}   transition={{ duration: 0.5, ease: "easeOut", bounce: 0.4 }}  className=' w-full h-120 flex  justify-center items-center t '>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 overflow-visible">

<TestimonialSlider/>    
<TestimonialSlider/>    
<TestimonialSlider/>    

</div>

</motion.div>

    </main>


    </div> 
</>
  )
}

export default Home


