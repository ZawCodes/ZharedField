import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import './Main.css';
// import TagCloud from 'TagCloud';
import AnimatedLetters from '../AnimatedLetters'
import MyCV from '../assets/files/MyCV.pdf'

const Main = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const welcomeText = ['H', 'i',',', ' ',`I`,`'`, 'm',' ','Z', 'h', 'a', 'r', 'e', 'd'];

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
                <a target="_blank" href={MyCV}>
                <div className='cv-download'>
                    Download CV Here!
                </div>
                </a>
                <main className='main-container'>
                    <div className='left-div'>
                        <h3>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={welcomeText}
                            idx={1}
                            />
                        </h3>
                        <p><span className='tab'></span>I'm a <span>Front end developer </span>with 3 years of experience
                           living in Myanmar. I build online e-learning platforms and classroom management systems for my company.</p>
                        <p onClick={() => scrollToAbout()} className='more'>More about me</p>
                    </div>
                    {/* <div className='right-div tagcloud'>
                    </div> */}
                </main>
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
            </section>
        </>
    )
}

export default Main