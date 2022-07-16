import React from 'react'
import './Header.css'

const Header = () => {
    const scrollToSection = (e) => {
        switch (e) {
            case 'About':
                var ele = document.getElementsByClassName('about-section')[0];
                ele.scrollIntoView();
                break;
            case 'Project':
                var ele = document.getElementsByClassName('project-section')[0];
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
                    <li onClick={() => scrollToSection('About')}><a>About</a></li>
                    <li onClick={() => scrollToSection('Project')}><a>Project</a></li>
                    <li onClick={() => scrollToSection('Contact')}><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header