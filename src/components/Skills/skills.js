import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What i do</span>
        <span className='skillDesc'>
            I am L.S.Sangeeth, an undergraduate student at
            SLIIT with 6 months of experience in web
            development. I am a highly motivated and
            results-oriented individual with a strong work
            ethic. I am also a team player and I am always
            willing to help others. I am proficient in HTML, CSS, and JavaScript, and I have experience
            with a variety of web development
            frameworks. I am also familiar with the Agile
            development methodology. I am passionate
            about web development and I am always
            looking for new challenges. I am confident that
            I have the skills and experience necessary to be
            successful in a web development role.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>This is demo text. You can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is demo text. You can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='skillbar' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is demo text. You can write your own content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;