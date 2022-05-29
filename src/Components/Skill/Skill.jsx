import React, { useEffect, useReducer } from 'react'
import './Skill.css';
import UiT from "../assets/images/UIT-Logo-big.png";
import NCC from "../assets/images/ncc_edu.png";
import revealFunction from '../assets/RevealFunction';

const Skill = () => {
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
    const frontendSkills = 'Javascript, Html, Css';
    const uiuixSkills = 'Figma, Photoshop, Krita';
    const agileSkills = 'Scrum, Agile';
    const testingSkills = 'Unit testing, Integration testing';
    const teamSkills = 'Team Communication, Supporting, Leadership';
    const problemSkills = 'Creative, Quick thinking';
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
            <section className='skill-section reveal'>
                <h3 className='reveal'>Skill</h3>
                <article className='skill-list-article'>
                    <div className='skill-wrap'>
                        <div className='left-div reveal'>
                            <ul className='skill-list'>
                                <li onClick={() => dispatch({ type: 'frontend', index: 0 })}>Front end Development</li>
                                <li onClick={() => dispatch({ type: 'uiux', index: 1 })}>Ui/Ux Design</li>
                                <li onClick={() => dispatch({ type: 'agile', index: 2 })}>Agile workflow</li>
                                <li onClick={() => dispatch({ type: 'testing', index: 3 })}>Software Testing</li>
                                <li onClick={() => dispatch({ type: 'teamplay', index: 4 })}>Team play</li>
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
                        <p>2015 - 2019 =&gt; University of Information Technology</p>
                        <p>Bachelor's Degree in Software Engineering</p>
                        </div>
                        <img className='uit-img' src={UiT}/>
                    </div>
                    <div className='reveal'>
                        <div className='flex-column reveal'>
                        <p>2014 - 2016 =&gt; NCC Education</p>
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