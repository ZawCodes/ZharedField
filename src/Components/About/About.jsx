import React from 'react'
import './About.css'
import Mepic from '../assets/images/me.jpg'

const About = () => {
  return (
    <>
        <section className='about-section'>
            <h3>About me</h3>
            <article className='first-article'>
                <div className='left-div'>
                My real name is Zaw Htet Aung.
                  I'm 24 as of this moment.
                   I've been working as a full-time front end developer at <span>the Amdon group</span> since I graduated my university in 2019, 
                   December with a Bachelor's degree in Software Engineering. Having accumulated over 2 years of experience at the Singapore based company,
                   I believe it is time for me to advance my career by finding an on-site job in Singapore,
                   which has always been my goal since the beginning.
                </div>
                <div className='right-div'>
                    <div>
                      {/* <div className='overlay'></div>  */}
                      <img src={Mepic}/>
                    </div>
                </div>
            </article>
        </section>
    </>
  )
}

export default About