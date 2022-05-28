import React from 'react'
import './About.css'
import Mepic from '../assets/images/me.jpg'
import refPic from '../assets/images/ino.jpg'
import refPictwo from '../assets/images/reftwo.jpg'
import ownPic from '../assets/images/toram.jpg'

const About = () => {
  return (
    <>
        <section className='about-section'>
            <h3>About me</h3>
            <article className='first-article'>
                <div className='left-div'>
              <p>
              <span className='tab'></span>My real name is Zaw Htet Aung.
                  I'm a 24 y/o junior web developer as well as an amateur artist.
                   I've been working as a full-time front end developer at <span className="amdon-group">the Amdon group</span> since I graduated my university in 2019, 
                   December with a Bachelor's degree in Software Engineering.
                   I'm a natural born creator and I like to create many things including websites, arts, stories etc.
                     Being creative with the ideas is the easy part of a process for me.
                      And the difficult part is where you actually bring those ideas into reality.
              </p>
                </div>
                <div className='right-div'>
                    <div className='me-pic'>
                      {/* <div className='overlay'></div>  */}
                      <img src={Mepic}/>
                    </div>
                </div>
            </article>
            <article className='second-article'>
              <div className='left-div'>
                <div className='invi-box'>
                <span className='from'>From these</span>
                <img src={refPic} className='ref-pic'/>
                <img src={refPictwo} className='refTwo-pic'/>
                <img src={ownPic} className='own-pic'/>
                <span className='to'>To this</span>
                </div>
              </div>
              <div className='right-div'>
             <p>
             <span className='tab'></span>As an artist, I tend to take inspirations from different places and try to create something new. Building a website is a lot similiar to making an art piece.
               When you've mastered to gather, combine and recreate the stuff you want, you can do almost anything. 
               I also like to play video games, watch anime and movies in my free time.
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