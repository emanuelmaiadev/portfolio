"use client"; 

import Nav from './Nav'
import MobileNav from './MobileNav'
import React, { useState } from 'react'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = ()=> setShowNav(true);
  const closeNavHandler = ()=> setShowNav(false);
    return (
    <div>
    <Nav openNav={showNavHandler} />
    <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav

