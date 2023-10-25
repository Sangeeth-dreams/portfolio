import React from 'react';
import './navbar.css';
import logo2 from '../../assets/logo2.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo2} alt='logo'className='logo'/>
        <div classname='desktopMenuBtn'>
            <Link className='desktopMenuListitem'>Home</Link>
            <Link className='desktopMenuListitem'>About</Link>
            <Link className='desktopMenuListitem'>Portfolio</Link>
            <Link className='desktopMenuListitem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='' className='desktopMenuImg'/> Contact Me
        </button>
    </nav>
  )
}

export default Navbar