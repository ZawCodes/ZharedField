import React from 'react'
import './Work.css'
import circle from '../assets/images/circle.svg';
import line from '../assets/images/line.svg';
import classwerkz from '../assets/images/classwerkz.png';
import nodma from '../assets/images/nodma.png';
import stemwerkz from '../assets/images/stemwerkz.png';

const Work = () => {
  return (
    <>
        <section className='work-section'>
          <h3>Work Experience</h3>
            <article className='exp-tree'>
              <div className='year-00'>
                <div className='div0'></div>
                <div className='div1'>
                  <img src={circle}/>
                  <img src={line}/>
                </div>
                <div className='div2'>
                  <h4>2019 October to Current - The Amdon Consulting</h4>
                  Build and maintain several web applications for online e-learning and STEM education using Angular and Angularjs.
                </div>
              </div>
              <div className='year-01'>
                <div className='div0'>
                <h4>2019 May to August - Dir Ace Technology Internship</h4>
                Developed a web application for checking exam result status using Spring boot and thymeleaf.
                </div>
                <div className='div1'>
                  <img src={circle}/>
                  <img src={line}/>
                </div>
                <div className='div2'>
                </div>
              </div>
              <div className='year-02'>
                <div className='div0'></div>
                <div className='div1'>
                  <img src={circle}/>
                  <img style={{visibility: 'hidden'}} src={line}/>
                </div>
                <div className='div2'>
                  <h4>2018 November - Base Technology Field Study</h4>
                  Web Crawling the local News Websites and storing them in a seperate file using Python.
                </div>
              </div>
            </article>
            <h2>Projects</h2>
            <article className='project-article'>
              <p>
              While working at the Amdon group, I've helped build and maintained some of the existing projects as well as the new ones. Here I'll be picking three main projects that I've had the pleasure of developing along with my senior colleagues.
              </p>
              <div className='showcase'>
                <div className='project1'>
                  <img src={classwerkz}/>
                  <div id='classwerkz'>Classwerkz</div>
                </div>
                <div className='project2'>
                  <img src={nodma}/>
                  <div id='nodma'>Nod<span>ma</span></div>
                </div>
                <div className='project3'>
                  <img src={stemwerkz}/>
                  <div id='stemwerkz'>Stemwerkz</div>
                </div>
              </div>
            </article>
        </section>
    </>
  )
}

export default Work