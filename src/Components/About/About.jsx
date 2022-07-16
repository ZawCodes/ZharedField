import React, {useEffect, useRef, useState} from 'react'
import './About.css'
import Mepic from '../assets/images/me.jpg'
import refPic from '../assets/images/ino.jpg'
import refPictwo from '../assets/images/reftwo.jpg'
import ownPic from '../assets/images/toram.jpg'
import AnimatedLetters from '../AnimatedLetters'
import revealFunction from '../assets/RevealFunction'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const aboutText = ['A','b','o','u','t',' ','M','e'];

  useEffect(()=>{
    window.addEventListener('scroll', revealFunction)
  },[])

  return (
    <>
        <section className='about-section reveal'>
            <div className="about-wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
            </div>
            <h3 className='reveal'>
            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aboutText}
                            idx={1}
                            />
            </h3>
            <article className='first-article'>
                <div className='left-div reveal'>
            
                <h4>Intro</h4>  
              <p>
                   A 24 y/o software developer with a passion for creating beautiful and user-friendly websites. Born and raised in Myanmar. 
                   Graduated from High School in 2014, achieved a Level 4 Diploma in Computing in 2016 and a Bachelor's Degree in Software Engineering in 2019.
                   A full time professional Front-end developer at the <a href='https://www.amdon.com/' className="amdon-group">Amdon Consulting Group</a> and an amateur artist.
              </p>
                </div>
                <div className='right-div'>
                      {/* <div className='overlay'></div>  */}
                      <img className='me-pic reveal' src={Mepic}/>
                </div>
            </article>
            
            <article className='first-article'>
                <div className='left-div reveal'>
            
                <h4 style={{visibility: 'hidden'}}>Intro</h4>  
                <p>
                "As an artist, I tend to take inspirations from different places and try to create something new. Building a website is a lot similiar to making an art piece.
               When you've mastered to gather, combine and recreate the stuff you want, I belive you can do almost anything."
              </p>
                </div>
                <div className='right-div'>
                      {/* <div className='overlay'></div>  */}
                      <img className='own-pic reveal' src={ownPic}/>
                </div>
            </article>
            {/* <article className='second-article'>
              <div className='left-div reveal'>
                <div className='invi-box'>
                <span className='from'>From these</span>
                <img src={refPic} className='ref-pic'/>
                <img src={refPictwo} className='refTwo-pic'/>
                <img src={ownPic} className='own-pic'/>
                <span className='to'>To this</span>
                </div>
              </div>
              <div className='right-div reveal'>
            
             <h4>How I roll</h4> <p>
             <span className='tab'></span>As an artist, I tend to take inspirations from different places and try to create something new. Building a website is a lot similiar to making an art piece.
               When you've mastered to gather, combine and recreate the stuff you want, you can do almost anything. 
               As a hobby, I like to play video games and watch movies in my free time.
             </p>
              </div>
            </article> */}
            {/* <div className='about-skill'>
              <span>But what about your skills?</span>
            </div> */}
        </section>
    </>
  )
}

export default About