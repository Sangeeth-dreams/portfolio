import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sangeeth</span> <br/>Software Engineer</span>
            <p className='introPara'>Web Developer with a passion for creating innovative and user-friendly websites. <br/>Always eager to learn new technologies and stay up-to-date with the latest trends in the IT industry.</p>
        <Link><button className='btn'><img src={btnImg} alt='hire' className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;