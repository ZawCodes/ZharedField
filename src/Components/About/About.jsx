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
                  I'm 24 as of this moment.
                   I've been working as a full-time front end developer at <span>the Amdon group</span> since I graduated my university in 2019, 
                   December with a Bachelor's degree in Software Engineering.
                    I'm enthusiastic about creating visually pleasing stuffs whether they maybe an art or a web application.
                     Being creative with the ideas is the easy part of a process.
                      And the difficult part is where you actually bring those ideas into reality.
                        This is the step where a lot of starters fail. 
                        And below is my approach in tackling this problem.
              </p>
                </div>
                <div className='right-div'>
                    <div>
                      {/* <div className='overlay'></div>  */}
                      <img src={Mepic}/>
                    </div>
                </div>
            </article>
            <article className='second-article'>
              <div className='left-div'>
                <span className='from'>From these</span>
                <img src={refPic} className='ref-pic'/>
                <img src={refPictwo} className='refTwo-pic'/>
                <img src={ownPic} className='own-pic'/>
                <span className='to'>To this</span>
              </div>
              <div className='right-div'>
             <p>
             <span className='tab'></span>As an artist, I take inspirations from different places and try to make them my own. Building a website is a lot similiar to making an art piece.
               When you've mastered to gather, combine and recreate the stuff you want, you can do anything.
             </p>
              </div>
            </article>
        </section>
    </>
  )
}

export default About