import React from 'react'
import './Project.css'

const Card = (props) => {
  return (
      <>
        <div className={'proj no' + props.id}>
                    <div className='img-div'>
                        <a href={props.link} target='_blank'>
                             <img src={props.img} width='300px'/>
                        </a>
                    </div>
                    <div className='desc-div'>
                        <h4>{props.title}</h4>
                        <p>{props.body}</p>
                    </div>
                </div>
      </>
  )
}

export default Card