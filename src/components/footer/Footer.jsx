import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

import './footer.css'

function Footer() {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Michael Hu</a>

      <ul className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#skillset'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Michael Hu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer