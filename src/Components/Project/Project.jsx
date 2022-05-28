import React from 'react'
import './Project.css'
import stemstart from '../assets/images/stemwerkz_start.png'
import Card from "./Card"
import ProjApi from "./ProjectApi"

const Project = () => {
    return (
        <>
         <section className='project-section'>
             <h3>Projects</h3>
             <article className='project-article'>
                 <p>Over the years, I've worked on several projects together with my colleagues. Here I'll be showing some of the projects I picked.</p>
                 <div className='proj-wrap'>
                     {ProjApi.map((value, index) => {
                         return <Card key={index} img={value.image} title={value.title} body={value.body} id={index}/>
                     })}
                 </div>
             </article>
         </section>
        </>
    )
}

export default Project