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
              <p>
                <h4>Intro</h4>
              <span className='tab'></span>My burmese name is Zaw Htet Aung.
                  I'm a 24 y/o junior web developer as well as an amateur artist.
                   I've been working as a full-time front end developer at <a href='https://www.amdon.com/' className="amdon-group">the Amdon group</a> since I graduated my university in 2019, 
                   December with a Bachelor's degree in Software Engineering.
                   I'm a natural born creator and I like to create many things including websites, arts, stories etc.
              </p>
                </div>
                <div className='right-div'>
                    <div className='me-pic reveal'>
                      {/* <div className='overlay'></div>  */}
                      <img src={Mepic}/>
                    </div>
                </div>
            </article>
            <article className='second-article'>
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
             <p>
             <h4>How I roll</h4>
             <span className='tab'></span>As an artist, I tend to take inspirations from different places and try to create something new. Building a website is a lot similiar to making an art piece.
               When you've mastered to gather, combine and recreate the stuff you want, you can do almost anything. 
               I enjoy playing video games, watch anime and movies in my free time.
             </p>
              </div>
            </article>
            {/* <div className='about-skill'>
              <span>But what about your skills?</span>
            </div> */}
        </section>
    </>
  )
}

export default About