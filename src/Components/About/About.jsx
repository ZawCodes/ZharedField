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