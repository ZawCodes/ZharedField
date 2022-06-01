import React from 'react'
import './Header.css'

const Header = () => {
    const scrollToSection = (e) => {
        switch (e) {
            case 'Home':
                var ele = document.getElementsByClassName('main-section')[0];
                ele.scrollIntoView();
                break;
            case 'Work':
                var ele = document.getElementsByClassName('work-section')[0];
                ele.scrollIntoView();
                break;
            case 'Contact':
                var ele = document.getElementsByClassName('contact-section')[0];
                ele.scrollIntoView();
                break;
        
            default:
                break;
        }
    }
  return (
    <>
        <header className='header-wrap'>
            <a href='./'>
            <h1 className='text-logo'>
                zha<span>red</span>
            </h1>
            </a>
            <nav>
                <ul>
                    <li onClick={() => scrollToSection('Home')}><a>Home</a></li>
                    <li onClick={() => scrollToSection('Work')}><a>Work</a></li>
                    <li onClick={() => scrollToSection('Contact')}><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header