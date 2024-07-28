import React from 'react'
import './intro.css';
import profile from '../../images/myphoto.jpg';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm 
                <span className='introName'> Lavanya Singla</span>
                <br />
                Software Developer    
            </span>
            <p className='introPara'>I am a very enthusiastic software developer with curios personality.</p>
        </div>
        <img src={profile} alt="profile" className="bg" />
    </section>
  )
}

export default Intro;