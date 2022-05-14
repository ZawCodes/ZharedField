import React from 'react'
import Header from './Header/Header';
import './Main.css';

const Main = () => {
    const tab = '&emsp;&emsp;&emsp;&emsp;';
  return (
    <>
        <Header />
        <section className='main-section'>
            <main className='main-container'>
                <div className='left-div'>
                    <h3><span>Hello</span>, and welcome!</h3>
                    <p><span className='tab'></span>I'm a <span>Front end developer</span> as well as an <span>artist</span>. Creating art and responsive website is my passion.</p>
                    <p className='more'>I wanna know more!</p>
                </div>
                <div className='right-div'>
                    Space for 3d text
                </div>
            </main>
        </section>
    </>
  )
}

export default Main