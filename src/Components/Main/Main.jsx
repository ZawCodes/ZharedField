import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import './Main.css';
import TagCloud from 'TagCloud';
import AnimatedLetters from '../AnimatedLetters'

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

    return (
        <>
            <Header />
            <section className='main-section'>
                <div className='cv-download'>
                    Download CV Here!
                </div>
                <main className='main-container'>
                    <div className='left-div'>
                        <h3>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={welcomeText}
                            idx={1}
                            />
                        </h3>
                        <p><span className='tab'></span>I'm a <span>Front end developer </span>
                            as well as an <span>artist</span> living in Myanmar
                            . I build online E-learning platforms for my company.</p>
                        <p className='more'>I wanna know more!</p>
                    </div>
                    {/* <div className='right-div tagcloud'>
                    </div> */}
                </main>
            </section>
        </>
    )
}

export default Main