'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Link } from 'react-router-dom'
import Formx from '../Home/Components/UpdateForm'


const Edit = () => {


 

  return (
   <div>

<Formx/>


   </div>
  )
}

export default Edit

