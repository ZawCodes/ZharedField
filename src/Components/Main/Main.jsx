import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import './Main.css';
// import TagCloud from 'TagCloud';
import AnimatedLetters from '../AnimatedLetters'
import MyCV from '../assets/files/MyCV.pdf'
import Mepic from '../assets/images/me.png'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const zaw = ['Z','a','w'];
    const htet = ['H','t','e','t'];
    const aung = ['A','u','n','g'];

    const texts = [
        'Javascript', 'Typescript', 'Html', 'Css', 'Angularjs', 'Angular', 'Reactjs', 'Nodejs', 'Git', 'Figma', 'Bootstrap', 'SQL'
    ];


    const options = {
        radius: 300,
    };
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)

        // if (document.getElementsByClassName('tagcloud').length == 1) {
        //     TagCloud('.tagcloud', texts, options);
        // }
    }, [])

    const scrollToAbout = () => {
        var ele = document.getElementsByClassName('about-section')[0];

        ele.scrollIntoView();
    }
    return (
        <>
            <Header />
            <section className='main-section'>
                {/* <a target="_blank" href={MyCV}>
                <div className='cv-download'>
                    Download CV Here!
                </div>
                </a> */}
                <main className='main-container'>
                    <div className='left-div'>
                        <h3>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={zaw}
                            comp={'main'}
                            idx={1}
                            />
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={htet}
                            comp={'main'}
                            idx={1}
                            />
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aung}
                            comp={'main'}
                            idx={1}
                            />
                        </h3>
                        <p>A Front end developer with 3 years of work experience currently living in Myanmar.</p>
                        <div style={{marginTop: '40px'}} className='d-flex' onClick={() => scrollToAbout()}>
                            {/* <p className='more blue'>More about me</p> */}
                            <a style={{ textDecoration: 'none'}} target="_blank" href={MyCV}><p className='more orange'>Download Resume</p></a>
                        </div>
                        <div className='logo-wrap'>
                   <a href='https://github.com/ZawHtetAung-Zhared' target='_blank' className='link-logo'>
                   <i className='fab fa-github'></i>
                   </a>
                   <a href='https://www.facebook.com/Zhared.Field' target='_blank' className='link-logo'>
                   <i className='fab fa-facebook-f'></i>
                   </a>
                   <a href='https://www.linkedin.com/in/zaw-htet-aung-zhared/' target='_blank' className='link-logo'>
                   <i className='fab fa-linkedin-in'></i>
                   </a>
                </div>
                    </div>
                    {/* <div className='right-div'>
                        <img className='Profile-pic' src={Mepic}/>
                    </div> */}
                </main>
            </section>
        </>
    )
}

export default Main