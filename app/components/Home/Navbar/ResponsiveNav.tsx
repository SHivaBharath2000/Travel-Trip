"use client"

import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
import react,{useState} from 'react'

const ResponsiveNav = () => {
  const [showNav,setshowNav]=useState(false)
  const handNavShow=()=>setshowNav(true)
  const handleCloseNav=()=>setshowNav(false)
  return (
    <div>
        <Nav openNav={handNavShow} />
        <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNav