import React, { useState, useEffect } from 'react';
// import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Hero from '../components/Hero';
import Body from '../components/Body';
import Footer from '../components/Footer';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    };
  });
 
  
  return (
    <div> 
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero />
    <Body />
    <Footer />
    </div>
  )
}
