'use client'

import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
const blogpost = () => {

const params=useParams()
const path= usePathname()
const searchparams=useSearchParams()

  return (

    //http://localhost:3000/blog/TailwindCSS?utm_source=instagram

    <div>
       <blockquote className='text-gray-600 text-2xl font-extralight'>Currently into {path}</blockquote>


    <h1 className='text-blue-600 text-2xl font-bold' > {params.post} </h1>

<span className='text-black text-2xl font-bold'>Traffic Source: {searchparams.get('utm_source')} </span>  


    </div>
  )
}

export default blogpost
