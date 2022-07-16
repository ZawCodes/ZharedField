import React, {useEffect} from 'react'
import './Project.css'

const Card = (props) => {
    const {image, title, body, link, tools} = props.projects;
    useEffect(() => {
        // console.log('props', props);
    }, [])
    
  return (
      <>
        <div className={'proj no' + props.id}>
                    <div className='img-div'>
                        <a href={link} target='_blank'>
                             <img src={image} width='300px'/>
                        </a>
                    </div>
                    <div className='desc-div'>
                    <h4><a href={link} target='_blank'>{title}</a></h4>
                        <h6>{tools}</h6>
                        <p>{body}</p>
                    </div>
                </div>
      </>
  )
}

export default Card