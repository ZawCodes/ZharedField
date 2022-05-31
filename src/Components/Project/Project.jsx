import React, {useEffect, useState} from 'react'
import './Project.css'
import stemstart from '../assets/images/stemwerkz_start.png'
import Card from "./Card"
import ProjApi from "./ProjectApi"
import revealFunction from '../assets/RevealFunction';
import AnimatedLetters from '../AnimatedLetters'

const Project = () => {

    const [letterClass, setLetterClass] = useState('text-animate-hover')
    const projectText = ['P','r','o','j','e', 'c', 't','s'];

    useEffect(()=>{
        window.addEventListener('scroll', revealFunction)
      },[])
    return (
        <>
         <section className='project-section reveal'>
             <h3 className='reveal'>
             <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectText}
                            idx={1}
                            />
             </h3>
             <article className='project-article'>
                 <p>Over the years, I've worked on several projects together with my colleagues. Here I'll be showing some of the projects I picked.</p>
                 <div className='proj-wrap reveal'>
                     {ProjApi.map((value, index) => {
                         return <Card key={index} img={value.image} title={value.title} body={value.body} link={value.link} id={index}/>
                     })}
                 </div>
             </article>
         </section>
        </>
    )
}

export default Project