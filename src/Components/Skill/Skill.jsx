import React, { useState, useEffect, useReducer } from 'react'
import './Skill.css';
import UiT from "../assets/images/UIT-Logo-big.png";
import NCC from "../assets/images/ncc_edu.png";
import revealFunction from '../assets/RevealFunction';
import AnimatedLetters from '../AnimatedLetters'

const Skill = () => {

  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const skillText = ['S','k','i','l','l'];

  useEffect(()=>{
    window.addEventListener('scroll', revealFunction)
  },[])

    const skillNames = {
        frontEnd: 'frontend',
        uiux: 'uiux',
        agile: 'agile',
        testing: 'testing',
        team: 'teamplay',
        problem: 'problemsolve'
    }
    const frontendSkills = 'Javascript, Typescript, Html, Css, Scss, Angular, Reactjs, Redux, Git, Jasmine, Cypress, SQL, MongoDB, Nodejs';
    const uiuixSkills = 'Sketch, Figma, Photoshop, Illustrator, Krita, Responsive web design';
    const agileSkills = 'Waterfall Model, Agile Model, Scrum methodology';
    const testingSkills = 'Unit testing, Integration testing, Accceptance testing, Functional testing, Manual testing, Test Automation';
    const teamSkills = 'Reliability, Communication, Supporting, Leadership';
    const problemSkills = 'Creative, Quick thinking, Decision-making, Stress management, Time management';
    const [skills, dispatch] = useReducer((state, action) => {
        switch (action.type) {
          case skillNames.frontEnd:
            return frontendSkills;
          case skillNames.uiux:
            return uiuixSkills;
          case skillNames.agile:
            return agileSkills;
          case skillNames.testing:
            return testingSkills;
          case skillNames.team:
            return teamSkills;
          case skillNames.problem:
            return problemSkills;
          default:
            return frontendSkills;
        }
      }, frontendSkills);
  return (
        <>
            <section className='skill-section'>
                <div className="skill-curve">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                  </svg>
                </div>
                <h3 className='reveal'>
                <AnimatedLetters
                            letterClass={letterClass}
                            strArray={skillText}
                            idx={1}
                            />
                </h3>
                <article className='skill-list-article'>
                    <div className='skill-wrap'>
                        <div className='left-div reveal'>
                            <ul className='skill-list'>
                                <li onClick={() => dispatch({ type: 'frontend', index: 0 })}>Web Development</li>
                                <li onClick={() => dispatch({ type: 'uiux', index: 1 })}>Ui/Ux Design</li>
                                <li onClick={() => dispatch({ type: 'agile', index: 2 })}>SDLC</li>
                                <li onClick={() => dispatch({ type: 'testing', index: 3 })}>Software Testing</li>
                                <li onClick={() => dispatch({ type: 'teamplay', index: 4 })}>Team Orientation</li>
                                <li onClick={() => dispatch({ type: 'problemsolve', index: 5 })}>Problem Solving</li>
                            </ul>
                        </div>
                        <div className='right-div reveal'>
                            <div className='code-box'>
                                {skills}
                            </div>
                        </div>
                    </div>
                </article>
                <h2 className='reveal'>Education</h2>
                <article className='education-article'>
                    <div className='reveal'>
                        <div className='flex-column reveal'>
                        <p>2015 - 2019 =&gt; <a href='https://www.uit.edu.mm/' className='uit-link'>University of Information Technology</a></p>
                        <p>Bachelor's Degree in Software Engineering</p>
                        </div>
                        <img className='uit-img' src={UiT}/>
                    </div>
                    <div className='reveal'>
                        <div className='flex-column reveal'>
                        <p>2014 - 2016 =&gt; <a href='https://www.nccedu.com/qualifications/computing/ncc-education-level-4-diploma-in-computing-l4dc/' className='uit-link'>NCC Education</a></p>
                        <p>Level 4 Diploma in Computing</p>
                        </div>
                        <img className='ncc-img' src={NCC}/>
                    </div>
                </article>
            </section>
        </>
  )
}

export default Skill