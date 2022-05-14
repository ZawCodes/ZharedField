import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className='header-wrap'>
            <h1 className='text-logo'>
                zha<span>red</span>
            </h1>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Work</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header